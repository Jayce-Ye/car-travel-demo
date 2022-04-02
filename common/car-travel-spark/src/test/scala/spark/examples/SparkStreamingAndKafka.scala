package spark.examples

import org.apache.kafka.common.serialization.StringDeserializer
import org.apache.log4j.{Level, Logger}
import org.apache.spark.streaming.kafka010.ConsumerStrategies.Subscribe
import org.apache.spark.streaming.kafka010.KafkaUtils
import org.apache.spark.streaming.kafka010.LocationStrategies.PreferConsistent

object SparkStreamingAndKafka {
  def main(args: Array[String]): Unit = {
    import org.apache.spark._
    import org.apache.spark.streaming._
    //设置Spark程序在控制台中的日志打印级别
    Logger.getLogger("org").setLevel(Level.WARN)
    //local[*]使用本地模式运行，*表示内部会自动计算CPU核数，也可以直接指定运行线程数比如2，就是local[2]
    //表示使用两个线程来模拟spark集群
    val conf = new SparkConf().setAppName("SparkStreamingAndKafka").setMaster("local[1]")

    //初始化Spark Streaming环境
    val streamingContext = new StreamingContext(conf, Seconds(1))

    //设置检查点
    streamingContext.checkpoint("/sparkapp/tmp")

    //"auto.offset.reset" -> "earliest"
    //
    val kafkaParams = Map[String, Object](
      "bootstrap.servers" -> "10.20.3.179:9092",
      "key.deserializer" -> classOf[StringDeserializer],
      "value.deserializer" -> classOf[StringDeserializer],
      "group.id" -> "test0002",
      "auto.offset.reset" -> "latest",
      "enable.auto.commit" -> (false: java.lang.Boolean)
    )

    val topics = Array("test_msg")

    topics.foreach(println(_))
    println("topics:" + topics)

    val stream = KafkaUtils.createDirectStream[String, String](
      streamingContext,
      PreferConsistent,
      Subscribe[String, String](topics, kafkaParams)
    )

    //打印实时流中的数据条数
    stream.count().print();

    //启动sparkstreaming程序
    streamingContext.start();
    streamingContext.awaitTermination();
    streamingContext.stop()
  }
}
