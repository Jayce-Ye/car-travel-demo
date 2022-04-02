package spark.examples

import org.apache.spark.rdd.RDD
import org.apache.spark.{SparkConf, SparkContext}

class WordCount {

}

object WordCount {
  def main(args: Array[String]): Unit = {
    //1.创建spark的配置对象
    val sparkConf = new SparkConf().setAppName("SparkWordCount").setMaster("local");
    //2.创建spark context的上下文
    val sc = new SparkContext(sparkConf);

    //3.使用spark上下文的api接口textFile读取文件形成spark数据处理模型RDD
    val linesRDD: RDD[String] = sc.textFile("C:\\work_space\\car-travel\\common\\car-travel-spark\\src\\test\\scala\\words")
    //4.对RDD每一行行进行分割（使用空格分割）
    val wordArrayRdd = linesRDD.map(_.split(" "))
    //5.分割完成之后，我们做一下扁平化，把多维集合转化为一维集合
    val wordsRDD = wordArrayRdd.flatMap(x => x)
    //6.单词计数，出现一次计数一个1
    //    val wordCount = wordsRDD.map((_,1))
    val wordCount = wordsRDD.map(word => {
      (word,1)
    })

    //7.最关键的一步就是对单词的所有计数进行汇总
    ()
    val restCount = wordCount.reduceByKey(_ + _)

    restCount.foreach(println(_))
    restCount.checkpoint()
    restCount.persist()
    sc.stop();
  }
}
