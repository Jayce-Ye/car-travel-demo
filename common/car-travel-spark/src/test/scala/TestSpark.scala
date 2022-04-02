////import com.pharbers.StreamEngine.Utils.Session.Spark.BPSparkSession
//import org.apache.spark.com.cartravel.sql.
//
///** 功能描述
//  *
//  * @param args 构造参数
//  * @tparam T 构造泛型参数
//  * @author dcs
//  * @version 0.0
//  * @since 2019/11/27 11:27
//  * @note 一些值得注意的地方
//  */
//object TestSpark {
//    def main(args: Array[String]): Unit = {
//        Run.run()
//    }
//
//
//    object Run extends Serializable {
//        def run(): Unit = {
//
//
//            val df = Seq("a", "b").toD
//              .map(x => {
//                  val a = new Test
//                  a.init()
//                  x + a.a
//              })
//            df.show()
//        }
//    }
//
//    class Test extends Serializable {
//        var a = "0"
//
//        def init(): Unit = {
//            a = "2"
//        }
//
//        def getString(in: String): String ={
//            in + "1"
//        }
//    }
//}
