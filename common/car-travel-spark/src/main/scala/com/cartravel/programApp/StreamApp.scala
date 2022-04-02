package com.cartravel.programApp

import com.cartravel.hbase.conn.HbaseConnections
import com.cartravel.kafka.KafkaManager
import com.cartravel.loggings.Logging
import com.cartravel.spark.SparkEngine
import com.cartravel.tools.{JsonParse, StructInterpreter, TimeUtils}
import com.cartravel.utils.GlobalConfigUtils
import org.apache.kafka.clients.consumer.ConsumerRecord
import org.apache.kafka.common.serialization.StringDeserializer
import org.apache.spark.rdd.RDD
import org.apache.spark.streaming.dstream.InputDStream
import org.apache.spark.streaming.kafka010.{HasOffsetRanges, OffsetRange}
import org.apache.spark.streaming.{Seconds, StreamingContext}

import scala.util.Try


/**
  * Created by angel
  */
object StreamApp extends Logging{

  //5 node01:9092,node02:9092,node03:9092,node04:9092,node05:9092,node06:9092 test_car test_consumer_car node01:2181,node02:2181,node03:2181,node04:2181,node05:2181,node06:2181
  def main(args: Array[String]): Unit = {
    //1、从kafka拿数据
    if (args.length < 5) {
      System.err.println("Usage: KafkaDirectStream \n" +
        "<batch-duration-in-seconds> \n" +
        "<kafka-bootstrap-servers> \n" +
        "<kafka-topics> \n" +
        "<kafka-consumer-group-id> \n" +
        "<kafka-zookeeper-quorum> "
      )
      System.exit(1)
    }
    //TODO
    val startTime = TimeUtils.getNowDataMin

    val batchDuration = args(0)
    val bootstrapServers = args(1).toString
    val topicsSet = args(2).toString.split(",").toSet
    val consumerGroupID = args(3)
    val zkQuorum = args(4)
    val sparkConf = SparkEngine.getSparkConf()
    val session = SparkEngine.getSparkSession(sparkConf)
    val sc = session.sparkContext
    val ssc = new StreamingContext(sc, Seconds(batchDuration.toLong))

    val topics = topicsSet.toArray
    val kafkaParams = Map[String, Object](
      "bootstrap.servers" -> bootstrapServers,
      "key.deserializer" -> classOf[StringDeserializer],
      "value.deserializer" -> classOf[StringDeserializer],
      "group.id" -> consumerGroupID,
      "auto.offset.reset" -> GlobalConfigUtils.getProp("auto.offset.reset"),
      "enable.auto.commit" -> (false: java.lang.Boolean) //禁用自动提交Offset，否则可能没正常消费完就提交了，造成数据错误
    )

    //1:
    /**
      * val stream:InputDStream = KafkaUtils.createDirectStream[String, String](
      streamingContext,
      PreferConsistent,
      Subscribe[String, String](topics, kafkaParams)
    )
      * */

    val kafkaManager = new KafkaManager(zkQuorum , kafkaParams)
    val inputDStream: InputDStream[ConsumerRecord[String, String]] = kafkaManager.createDirectStream(ssc, topics)

    inputDStream.print()

    inputDStream.foreachRDD(rdd =>{
      if(!rdd.isEmpty()){
        val ranges: Array[OffsetRange] = rdd.asInstanceOf[HasOffsetRanges].offsetRanges
        ranges.foreach(line =>{
          println(s" 当前读取的topic:${line.topic} , partition：${line.partition} , fromOffset:${line.fromOffset} , untilOffset: ${line.untilOffset}")
        })

        val doElse = Try{
          val data: RDD[String] = rdd.map(line => line.value())
          data.foreachPartition(partition =>{
            //构建连接
            val conn = HbaseConnections.getHbaseConn

            //写业务
            partition.foreach(d =>{
              val parse: (String  , Any) = JsonParse.parse(d)
              StructInterpreter.interpreter(parse._1 , parse , conn)
            })

            //注销连接
            HbaseConnections.closeConn(conn)

          })

        }

        if(doElse.isSuccess){
          //提交偏移量
          kafkaManager.persistOffset(rdd)
        }


      }
    })










    /**
      * 1:怎么对接kafka
      *   1.1：偏移量怎么维护
      *
      * 2：怎么落地Hbase
      *   2.1：负载均衡
      *     2.1.1：rowkey
      *     2.1.2：预分区
      * */




    ssc.start()
    ssc.awaitTermination()
  }

}
