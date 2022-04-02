package com.kryo;

/**
 * Created by angel
 */
import com.java.Simple;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import org.objenesis.strategy.StdInstantiatorStrategy;
import com.esotericsoftware.kryo.Kryo;
import com.esotericsoftware.kryo.KryoException;
import com.esotericsoftware.kryo.io.Input;
import com.esotericsoftware.kryo.io.Output;
public class KyroSerializable {
    public static void main(String[] args) throws IOException {
        long start = System.currentTimeMillis();
        setSerializableObject();
        System.out.println("Kryo 序列化时间:" + (System.currentTimeMillis() - start) + " ms" );
        start = System.currentTimeMillis();
        getSerializableObject();
        System.out.println("Kryo 反序列化时间:" + (System.currentTimeMillis() - start) + " ms");
    }
    public static void setSerializableObject() throws FileNotFoundException{
        Kryo kryo = new Kryo();
        kryo.setReferences(false);
        kryo.setRegistrationRequired(false);
        kryo.setInstantiatorStrategy(new StdInstantiatorStrategy());
        kryo.register(Simple.class);
        Output output = new Output(new FileOutputStream("/Users/angel/Desktop/car-travel/common/car-travel-spark/src/test/java/com/kryo.d"));
        for (int i = 0; i < 100000; i++) {
            Map<String,Integer> map = new HashMap<String, Integer>(2);
            map.put("zhang0", i);
            map.put("zhang1", i);
            kryo.writeObject(output, new Simple("zhang"+i,(i+1),map));
        }
        output.flush();
        output.close();
    }
    public static void getSerializableObject(){
        Kryo kryo = new Kryo();
        kryo.setReferences(false);
        kryo.setRegistrationRequired(false);
        kryo.setInstantiatorStrategy(new StdInstantiatorStrategy());
        Input input;
        try {
            input = new Input(new FileInputStream("/Users/angel/Desktop/car-travel/common/car-travel-spark/src/test/java/com/kryo.d"));
            Simple simple =null;
            while((simple=kryo.readObject(input, Simple.class)) != null){
                //System.out.println(simple.getAge() + " " + simple.getName() + " " + simple.getMap().toString());
            }
            input.close();
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch(KryoException e){
        }
    }
}
