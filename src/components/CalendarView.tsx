/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Calendar} from 'react-native-calendars';
import AppColors from '../utils/AppColors';
import {responsiveHeight} from '../utils/Responsive_Dimensions';

const CalendarView = () => {
  return (
    <Calendar
      style={{
        backgroundColor: AppColors.BTNCOLOURS,
        // height: 350,
        overflow: 'hidden',
        borderRadius: 30,
        paddingBottom: responsiveHeight(1),
      }}
      theme={{
        backgroundColor: AppColors.BTNCOLOURS,
        calendarBackground: AppColors.BTNCOLOURS,
        selectedDayBackgroundColor: AppColors.WHITE,
        selectedDayTextColor: AppColors.WHITE,
        textDisabledColor: AppColors.GRAY,
        arrowColor: AppColors.WHITE,
        monthTextColor: AppColors.WHITE,
        agendaDayTextColor: AppColors.WHITE,
        agendaDayNumColor: AppColors.WHITE,
        textSectionTitleColor: AppColors.WHITE,
      }}
    />
  );
};

export default CalendarView;
