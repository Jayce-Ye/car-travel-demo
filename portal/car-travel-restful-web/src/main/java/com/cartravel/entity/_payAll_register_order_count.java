package com.cartravel.entity;

/**
 * Created by angel
 */
public class _payAll_register_order_count {
    private String pay_all ;
    private String registerTotalCount ;
    private String totalOrderCount ;

    public String getPay_all() {
        return pay_all;
    }

    public void setPay_all(String pay_all) {
        this.pay_all = pay_all;
    }

    public String getRegisterTotalCount() {
        return registerTotalCount;
    }

    public void setRegisterTotalCount(String registerTotalCount) {
        this.registerTotalCount = registerTotalCount;
    }

    public String getTotalOrderCount() {
        return totalOrderCount;
    }

    public void setTotalOrderCount(String totalOrderCount) {
        this.totalOrderCount = totalOrderCount;
    }

    @Override
    public String toString() {
        return "_payAll_register_order_count{" +
                "pay_all='" + pay_all + '\'' +
                ", registerTotalCount='" + registerTotalCount + '\'' +
                ", totalOrderCount='" + totalOrderCount + '\'' +
                '}';
    }
}
