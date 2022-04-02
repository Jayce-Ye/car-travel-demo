package com.cartravel.entity;

import java.io.Serializable;

/**
 * Created by angel
 */
public class _day_week_month_mileage implements Serializable {
    private String cur_month_count ;
    private String daily_count ;
    private String total_count ;
    private String total_mileage ;

    public String getCur_month_count() {
        return cur_month_count;
    }

    public void setCur_month_count(String cur_month_count) {
        this.cur_month_count = cur_month_count;
    }

    public String getDaily_count() {
        return daily_count;
    }

    public void setDaily_count(String daily_count) {
        this.daily_count = daily_count;
    }

    public String getTotal_count() {
        return total_count;
    }

    public void setTotal_count(String total_count) {
        this.total_count = total_count;
    }

    public String getTotal_mileage() {
        return total_mileage;
    }

    public void setTotal_mileage(String total_mileage) {
        this.total_mileage = total_mileage;
    }

    @Override
    public String toString() {
        return "_day_week_month_mileage{" +
                "cur_month_count='" + cur_month_count + '\'' +
                ", daily_count='" + daily_count + '\'' +
                ", total_count='" + total_count + '\'' +
                ", total_mileage='" + total_mileage + '\'' +
                '}';
    }
}
