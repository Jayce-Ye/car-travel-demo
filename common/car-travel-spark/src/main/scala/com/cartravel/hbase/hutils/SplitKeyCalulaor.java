package com.cartravel.hbase.hutils;

/**
 * Created by angel
 */
public interface SplitKeyCalulaor {
    public byte[][] getSplitKeys(int regionNum);
}
