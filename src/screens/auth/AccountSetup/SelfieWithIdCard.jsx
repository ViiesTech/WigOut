/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image} from 'react-native';
import BackgroundScreen from '../../../components/AppTextComps/BackgroundScreen';
import AppHeader from '../../../components/AppHeader';
import {useNavigation} from '@react-navigation/native';
import LineBreak from '../../../components/LineBreak';
import AppText from '../../../components/AppTextComps/AppText';
import AppColors from '../../../utils/AppColors';
import AppImages from '../../../assets/images/AppImages';
import {
  responsiveHeight,
  responsiveWidth,
} from '../../../utils/Responsive_Dimensions';
import AppButton from '../../../components/AppButton';

const SelfieWithIdCard = () => {
  const navigation = useNavigation();
  return (
    <BackgroundScreen>
      <AppHeader onBackPress={() => navigation.goBack()} />

      <LineBreak space={4} />

      <View>
        <AppText
          title={'Selfie with ID Card'}
          textSize={3.5}
          textColor={AppColors.WHITE}
          textAlignment={'center'}
          textFontWeight
        />

        <LineBreak space={2} />

        <AppText
          title={'Please look at the camera and hold still'}
          textSize={2}
          textColor={AppColors.LIGHTGRAY}
          textAlignment={'center'}
        />
      </View>

      <LineBreak space={2} />

      <Image
        source={AppImages.MAN_WITH_ID}
        resizeMode="contain"
        style={{
          width: responsiveWidth(100),
          height: responsiveHeight(65),
          alignSelf: 'center',
        }}
      />

      <LineBreak space={3} />

      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <AppButton
          title={'ReTake'}
          textColor={AppColors.BLACK}
          textSize={2}
          handlePress={() => {
            navigation.navigate('CreateNewPin');
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
            navigation.navigate('CreateNewPin');
          }}
          btnWidth={42}
          btnPadding={15}
        />
      </View>
    </BackgroundScreen>
  );
};

export default SelfieWithIdCard;
