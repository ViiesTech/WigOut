/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, ImageBackground} from 'react-native';
import AppHeader from '../../../components/AppHeader';
import AppColors from '../../../utils/AppColors';
import {responsiveHeight} from '../../../utils/Responsive_Dimensions';
import AppImages from '../../../assets/images/AppImages';
import LocationModal from '../../../components/LocationModal';

const SetLocation = () => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          backgroundColor: AppColors.WHITE,
          paddingBottom: responsiveHeight(4),
          paddingTop: responsiveHeight(2),
        }}>
        <AppHeader
          onBackPress
          heading={'Set Your Location'}
        />
      </View>

      <ImageBackground source={AppImages.LOCATION} style={{flex: 1}}>
        <View style={{flex: 1, justifyContent: 'flex-end'}}>
          <LocationModal />
        </View>
      </ImageBackground>
    </View>
  );
};

export default SetLocation;
