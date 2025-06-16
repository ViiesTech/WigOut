/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StatusBar, ImageBackground} from 'react-native';
import AppHeader from '../../../components/AppHeader';
import {useNavigation} from '@react-navigation/native';
import AppColors from '../../../utils/AppColors';
import {
  responsiveHeight,
  responsiveWidth,
} from '../../../utils/Responsive_Dimensions';
import AppImages from '../../../assets/images/AppImages';
import LocationModal from '../../../components/LocationModal';

const SetLocation = () => {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={AppColors.BLACK} />
      <View
        style={{
          backgroundColor: AppColors.BLACK,
          paddingHorizontal: responsiveWidth(4),
          paddingVertical: responsiveHeight(3),
        }}>
        <AppHeader
          onBackPress={() => {
                navigation.goBack();
          }}
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
