/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import ImageIntroSlider from '../../components/ImagesIntroSlider';
import AppColors from '../../utils/AppColors';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../utils/Responsive_Dimensions';
import LineBreak from '../../components/LineBreak';
import AppText from '../../components/AppTextComps/AppText';
import SeeMoreText from '../../components/SeeMoreText';
import AppImages from '../../assets/images/AppImages';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppTextInput from '../../components/AppTextInput';
import AppButton from '../../components/AppButton';

const HomeDetails = () => {
  return (
    <View style={{flex: 1, backgroundColor: AppColors.WHITE}}>
      <ImageIntroSlider />

      <ScrollView style={{flex: 1, paddingHorizontal: responsiveWidth(5)}}>
        <LineBreak space={2} />

        <View>
          <AppText
            title={'Restaurant Name'}
            textColor={AppColors.BLACK}
            textSize={3}
            textFontWeight
          />
          <LineBreak space={2} />

          <View
            style={{
              borderTopWidth: 1,
              borderBottomWidth: 1,
              borderBottomColor: AppColors.appBgColor,
              borderTopColor: AppColors.appBgColor,
              paddingVertical: responsiveHeight(2),
            }}>
            <AppText
              title={'About Event'}
              textColor={AppColors.BLACK}
              textSize={2}
              textFontWeight
            />

            <LineBreak space={1} />

            <SeeMoreText
              text={
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut...'
              }
              textColor={AppColors.GRAY}
              textSize={1.5}
              lineHeight={2.3}
            />
          </View>

          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: AppColors.appBgColor,
              paddingVertical: responsiveHeight(2),
            }}>
            <AppText
              title={'Reviews & Ratings'}
              textColor={AppColors.BLACK}
              textSize={2}
              textFontWeight
            />

            <LineBreak space={1} />

            <Image source={AppImages.chart} />
          </View>

          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: AppColors.appBgColor,
              paddingVertical: responsiveHeight(2),
            }}>
            <AppText
              title={'Location'}
              textColor={AppColors.BLACK}
              textSize={2}
              textFontWeight
            />

            <LineBreak space={2} />

            <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
              <Ionicons
                name={'location'}
                size={responsiveFontSize(1.8)}
                color={AppColors.BTNCOLOURS}
              />
              <AppText
                title={'Grand City St. 100, New York, United States'}
                textColor={AppColors.GRAY}
                textSize={1.8}
              />
            </View>

            <LineBreak space={2} />

            <TouchableOpacity onPress={() => {}}>
              <Image
                source={AppImages.USER_LOCATION}
                style={{width: responsiveWidth(90)}}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              paddingVertical: responsiveHeight(2),
            }}>
            <AppText
              title={'Add Review'}
              textColor={AppColors.BLACK}
              textSize={2}
              textFontWeight
            />

            <LineBreak space={2} />

            <AppTextInput
              inputPlaceHolder={'Write your detailed review'}
              borderWidth={1}
              borderColor={AppColors.GRAY}
              textAlignVertical={'top'}
              inputHeight={15}
              multiline={true}
              rightIcon={
                <View
                  style={{
                    flex: 1,
                    height: responsiveHeight(12),
                    justifyContent: 'flex-end',
                    alignItems: 'flex-end',
                  }}>
                  <TouchableOpacity>
                    <Ionicons
                      name={'send'}
                      size={responsiveFontSize(2.5)}
                      color={AppColors.BTNCOLOURS}
                    />
                  </TouchableOpacity>
                </View>
              }
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <AppButton
              title={'Avoid'}
              handlePress={() => {}}
              textFontWeight={false}
              btnPadding={15}
              btnWidth={44}
              textSize={2}
              btnBackgroundColor={AppColors.LIGHT_BTNCOLOURS}
            />
            <AppButton
              title={'Go Again'}
              handlePress={() => {}}
              textFontWeight={false}
              btnPadding={15}
              btnWidth={44}
              textSize={2}
              btnBackgroundColor={AppColors.BTNCOLOURS}
            />
          </View>
        </View>
        <LineBreak space={2} />
      </ScrollView>
    </View>
  );
};

export default HomeDetails;
