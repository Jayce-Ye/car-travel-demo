/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// scalastyle:off println
package spark.examples

import org.apache.log4j.{Level, Logger}
import org.apache.spark.SparkConf
import org.apache.spark.storage.StorageLevel
import org.apache.spark.streaming.{Seconds, StreamingContext}

/**
  * Counts words in UTF8 encoded, '\n' delimited text received from the network every second.
  *
  * Usage: NetworkWordCount <hostname> <port>
  * <hostname> and <port> describe the TCP server that Spark Streaming would connect to receive data.
  *
  * To run this on your local machine, you need to first run a Netcat server
  * `$ nc -lk 9999`
  * and then run the example
  * `$ bin/run-example org.apache.spark.examples.streaming.NetworkWordCount localhost 9999`
  */
object NetworkWordCount {
  //设置spark控制台日志级别
  Logger.getLogger("org").setLevel(Level.WARN)

  def main(args: Array[String]) {

    val host = "192.168.52.120"
    val port = 9999;

    val sparkConf = new SparkConf().setAppName("NetworkWordCount").setMaster("local[3]")
    val ssc = new StreamingContext(sparkConf, Seconds(1))

    val lines = ssc.socketTextStream(host, port, StorageLevel.MEMORY_AND_DISK_SER)

    val words = lines.flatMap(_.split(" "))
    //    val wordCounts = words.map(x => (x, 1)).reduceByKey(_ + _)

    ssc.checkpoint("C:\\work_space\\car-travel\\common\\car-travel-spark\\target\\streaming_output")
    val wordCounts = words.map(x => (x, 1)).updateStateByKey((vals: Seq[Int], sumOpt: Option[Int]) => {
      var count = vals.sum
      if (!sumOpt.isEmpty) {
        count = count + sumOpt.get
      }
      Some(count)
    })

    wordCounts.print()
    ssc.start()
    ssc.awaitTermination()
  }
}

// scalastyle:on println
