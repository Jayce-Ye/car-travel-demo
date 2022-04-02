package com.cartravel.entity;

import java.io.Serializable;

/**
 * Created by angel
 */
public class _summary_vehicle_order_df implements Serializable {
    private String city_code ;
    private String _month_vehicle_num ;
    private String _day_vehicle_num ;
    private String _week_order_num ;
    private String _month_order_num ;
    private String _day_order_num ;

    public String getCity_code() {
        return city_code;
    }

    public void setCity_code(String city_code) {
        this.city_code = city_code;
    }

    public String get_month_vehicle_num() {
        return _month_vehicle_num;
    }

    public void set_month_vehicle_num(String _month_vehicle_num) {
        this._month_vehicle_num = _month_vehicle_num;
    }

    public String get_day_vehicle_num() {
        return _day_vehicle_num;
    }

    public void set_day_vehicle_num(String _day_vehicle_num) {
        this._day_vehicle_num = _day_vehicle_num;
    }

    public String get_week_order_num() {
        return _week_order_num;
    }

    public void set_week_order_num(String _week_order_num) {
        this._week_order_num = _week_order_num;
    }

    public String get_month_order_num() {
        return _month_order_num;
    }

    public void set_month_order_num(String _month_order_num) {
        this._month_order_num = _month_order_num;
    }

    public String get_day_order_num() {
        return _day_order_num;
    }

    public void set_day_order_num(String _day_order_num) {
        this._day_order_num = _day_order_num;
    }

    @Override
    public String toString() {
        return "_summary_vehicle_order_df{" +
                "city_code='" + city_code + '\'' +
                ", _month_vehicle_num='" + _month_vehicle_num + '\'' +
                ", _day_vehicle_num='" + _day_vehicle_num + '\'' +
                ", _week_order_num='" + _week_order_num + '\'' +
                ", _month_order_num='" + _month_order_num + '\'' +
                ", _day_order_num='" + _day_order_num + '\'' +
                '}';
    }
}
