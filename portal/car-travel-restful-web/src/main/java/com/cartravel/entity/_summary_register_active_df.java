package com.cartravel.entity;

/**
 * Created by angel
 * 新增 、 活跃
 */
public class _summary_register_active_df {
    private String city_code ;
    private String day_new_user_count ; //日新增
    private String DAU ;    //日活跃

    public String getCity_code() {
        return city_code;
    }

    public void setCity_code(String city_code) {
        this.city_code = city_code;
    }

    public String getDay_new_user_count() {
        return day_new_user_count;
    }

    public void setDay_new_user_count(String day_new_user_count) {
        this.day_new_user_count = day_new_user_count;
    }

    public String getDAU() {
        return DAU;
    }

    public void setDAU(String DAU) {
        this.DAU = DAU;
    }

    @Override
    public String toString() {
        return "_summary_register_active_df{" +
                "city_code='" + city_code + '\'' +
                ", day_new_user_count='" + day_new_user_count + '\'' +
                ", DAU='" + DAU + '\'' +
                '}';
    }
}
