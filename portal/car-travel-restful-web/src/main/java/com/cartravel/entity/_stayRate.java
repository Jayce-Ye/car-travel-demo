package com.cartravel.entity;

/**
 * Created by angel
 *第2屏幕（留存率）
 */
public class _stayRate {
    private String dayStayRate ;
    private String weekStayRate ;
    private String monthStayRate ;

    public String getDayStayRate() {
        return dayStayRate;
    }

    public void setDayStayRate(String dayStayRate) {
        this.dayStayRate = dayStayRate;
    }

    public String getWeekStayRate() {
        return weekStayRate;
    }

    public void setWeekStayRate(String weekStayRate) {
        this.weekStayRate = weekStayRate;
    }

    public String getMonthStayRate() {
        return monthStayRate;
    }

    public void setMonthStayRate(String monthStayRate) {
        this.monthStayRate = monthStayRate;
    }

    @Override
    public String toString() {
        return "_stayRate{" +
                "dayStayRate='" + dayStayRate + '\'' +
                ", weekStayRate='" + weekStayRate + '\'' +
                ", monthStayRate='" + monthStayRate + '\'' +
                '}';
    }
}
