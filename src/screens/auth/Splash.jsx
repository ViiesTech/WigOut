/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {View, Image} from 'react-native';
import AppColors from '../../utils/AppColors';
import AppImages from '../../assets/images/AppImages';
import {
  responsiveHeight,
  responsiveWidth,
} from '../../utils/Responsive_Dimensions';
import {useCustomNavigation} from '../../utils/Hooks';

const Splash = () => {
  const {navigateToRoute} = useCustomNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigateToRoute('OnBoarding');
    }, 1500);
  }, [navigateToRoute]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: AppColors.BTNCOLOURS,
      }}>
      <View
        style={{flex: 0.9, justifyContent: 'center', alignItems: 'flex-end'}}>
        <Image
          source={AppImages.app_name}
          style={{width: responsiveWidth(100), height: responsiveHeight(100)}}
          resizeMode="contain"
        />
      </View>
      <View style={{flex: 1}}>
        <Image
          source={AppImages.main_logo}
          style={{width: responsiveWidth(100), height: responsiveHeight(78)}}
        />
      </View>
    </View>
  );
};

export default Splash;
