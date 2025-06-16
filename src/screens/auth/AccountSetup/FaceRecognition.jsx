/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image} from 'react-native';
import BackgroundScreen from '../../../components/AppTextComps/BackgroundScreen';
import {useNavigation} from '@react-navigation/native';
import AppHeader from '../../../components/AppHeader';
import AppText from '../../../components/AppTextComps/AppText';
import AppColors from '../../../utils/AppColors';
import LineBreak from '../../../components/LineBreak';
import AppButton from '../../../components/AppButton';
import AppImages from '../../../assets/images/AppImages';
import {
  responsiveHeight,
  responsiveWidth,
} from '../../../utils/Responsive_Dimensions';

const FaceRecognition = () => {
  const navigation = useNavigation();
  return (
    <BackgroundScreen>
      <AppHeader onBackPress={() => navigation.goBack()} />

      <LineBreak space={4} />

      <View style={{flex: 1, justifyContent: 'space-between'}}>
        <View>
          <AppText
            title={'Face Recognition'}
            textSize={3.5}
            textColor={AppColors.WHITE}
            textAlignment={'center'}
            textFontWeight
          />

          <LineBreak space={2} />

          <AppText
            title={'Add a face recognition to make your account more secure.'}
            textSize={2}
            textColor={AppColors.LIGHTGRAY}
            textAlignment={'center'}
          />
        </View>

        <Image
          source={AppImages.SCAN}
          resizeMode="contain"
          style={{
            width: responsiveWidth(80),
            height: responsiveHeight(45),
            alignSelf: 'center',
          }}
        />

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <AppButton
            title={'Skip'}
            textColor={AppColors.BLACK}
            textSize={2}
            handlePress={() => {
              navigation.navigate('FaceScanning');
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
              navigation.navigate('FaceScanning');
            }}
            btnWidth={42}
            btnPadding={15}
          />
        </View>
      </View>
    </BackgroundScreen>
  );
};

export default FaceRecognition;
