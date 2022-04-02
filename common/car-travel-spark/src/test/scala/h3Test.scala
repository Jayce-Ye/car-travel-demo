import com.uber.h3core.H3Core

object h3Test {
  val h3 = H3Core.newInstance

  def locationToH3(lat: Double, lon: Double, res: Int): Long = {
    h3.geoToH3(lat, lon, res)
  }

  def main(args: Array[String]): Unit = {
    val h3code1 = locationToH3(19.715031,110.563673,12)
//    val h3code2 = locationToH3(19.715031,110.563673,10)
    println("h3code1:"+h3code1);
//    println("h3code2:"+h3code2);

    println(h3.geoToH3Address(19.7157,110.5636,12))
    println(h3.geoToH3Address(19.7149,110.5637,12))
    println(h3.geoToH3Address(19.715657,110.563764,12))
    println(h3.geoToH3Address(19.715688,110.563662,12))
    println(h3.h3ToGeoBoundary("8c41766410d17ff"))
    println(h3.h3ToGeoBoundary("8c41766410c29ff"))
    println(h3.h3ToGeoBoundary("8c41766410d15ff"))
  }
}
