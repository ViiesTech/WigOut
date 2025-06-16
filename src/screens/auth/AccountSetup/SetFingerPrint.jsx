/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image} from 'react-native';
import BackgroundScreen from '../../../components/AppTextComps/BackgroundScreen';
import {useNavigation} from '@react-navigation/native';
import AppHeader from '../../../components/AppHeader';
import AppText from '../../../components/AppTextComps/AppText';
import AppColors from '../../../utils/AppColors';
import AppImages from '../../../assets/images/AppImages';
import {
  responsiveHeight,
  responsiveWidth,
} from '../../../utils/Responsive_Dimensions';
import AppButton from '../../../components/AppButton';

const SetFingerPrint = () => {
  const navigation = useNavigation();
  return (
    <BackgroundScreen>
      <AppHeader
        onBackPress={() => navigation.goBack()}
        heading={'Set Your Fingerprint'}
      />

      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          gap: 20,
          alignItems: 'center',
        }}>
        <AppText
          title={'Add a fingerprint to make your account more secure.'}
          textColor={AppColors.LIGHTGRAY}
          textSize={2.2}
          textAlignment={'center'}
        />

        <Image
          source={AppImages.FINGER}
          resizeMode="contain"
          style={{
            width: responsiveWidth(80),
            height: responsiveHeight(45),
            alignSelf: 'center',
          }}
        />

        <AppText
          title={
            'Please put your finger on the fingerprint scanner to get started.'
          }
          textColor={AppColors.LIGHTGRAY}
          textSize={2.2}
          textAlignment={'center'}
        />
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <AppButton
          title={'Skip'}
          textColor={AppColors.BLACK}
          textSize={2}
          handlePress={() => {
            navigation.navigate('FaceRecognition');
          }}
          btnWidth={42}
          btnPadding={15}
          btnBackgroundColor={AppColors.WHITE}
        />
        <AppButton
          title={'Continue'}
          textColor={AppColors.BLACK}
          textSize={2}
          handlePress={() => {
            navigation.navigate('FaceRecognition');
          }}
          btnWidth={42}
          btnPadding={15}
        />
      </View>
    </BackgroundScreen>
  );
};

export default SetFingerPrint;
