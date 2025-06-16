/* eslint-disable react-native/no-inline-styles */
import React, {useRef, useState} from 'react';
import {
  View,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import BackgroundScreen from '../../../components/AppTextComps/BackgroundScreen';
import {useNavigation} from '@react-navigation/native';
import AppHeader from '../../../components/AppHeader';
import LineBreak from '../../../components/LineBreak';
import AppImages from '../../../assets/images/AppImages';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AppColors from '../../../utils/AppColors';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../../utils/Responsive_Dimensions';
import AppTextInput from '../../../components/AppTextInput';
import AppButton from '../../../components/AppButton';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import PhoneInputScreen from '../../../components/PhoneInput';
import { useCustomNavigation } from '../../../utils/Hooks';

const FillYourProfile = () => {
  const {navigateToRoute} = useCustomNavigation();

  return (
    <ScrollView style={{flex: 1, backgroundColor: AppColors.WHITE}}>
      <AppHeader onBackPress heading={'Fill Your Profile'} />

      <LineBreak space={4} />

      <View style={{flex: 1, alignItems: 'center'}}>
        <ImageBackground
          source={AppImages.USER_LOCATION}
          imageStyle={{borderRadius: 100, position: 'relative'}}
          style={{width: 120, height: 120}}>
          <View
            style={{
              position: 'absolute',
              bottom: responsiveHeight(1),
              right: 0,
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: AppColors.BTNCOLOURS,
                padding: responsiveWidth(1),
                borderRadius: 5,
              }}>
              <MaterialIcons
                name={'edit'}
                size={responsiveFontSize(2)}
                color={AppColors.WHITE}
              />
            </TouchableOpacity>
          </View>
        </ImageBackground>

        <LineBreak space={3} />

        <View style={{width: responsiveWidth(87), gap: 20}}>
          <AppTextInput inputPlaceHolder={'Full Name'} />
          <AppTextInput inputPlaceHolder={'Nickname'} />
          <AppTextInput
            inputPlaceHolder={'Date or Birth'}
            rightIcon={
              <TouchableOpacity>
                <MaterialCommunityIcons
                  name={'calendar-month-outline'}
                  size={responsiveFontSize(2.5)}
                  color={AppColors.BLACK}
                />
              </TouchableOpacity>
            }
          />
          <AppTextInput
            inputPlaceHolder={'Email'}
            rightIcon={
              <MaterialCommunityIcons
                name={'email-outline'}
                size={responsiveFontSize(2.5)}
                color={AppColors.BLACK}
              />
            }
          />

          <PhoneInputScreen />

          <AppTextInput
            inputPlaceHolder={'Gender'}
            rightIcon={
              <MaterialIcons
                name={'arrow-drop-down'}
                size={responsiveFontSize(2.5)}
                color={AppColors.WHITE}
              />
            }
          />

          <LineBreak space={3} />

          <AppButton
            title={'Continue'}
            textColor={AppColors.WHITE}
            textSize={2}
            btnPadding={18}
            handlePress={() => {
              navigateToRoute('SetLocation');
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default FillYourProfile;
