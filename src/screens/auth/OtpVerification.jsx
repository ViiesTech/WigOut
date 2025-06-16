/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import AppHeader from '../../components/AppHeader';
import AppButton from '../../components/AppButton';
import AppColors from '../../utils/AppColors';
import AppText from '../../components/AppTextComps/AppText';
import {OtpInput} from 'react-native-otp-entry';
import {responsiveWidth} from '../../utils/Responsive_Dimensions';
import { useCustomNavigation } from '../../utils/Hooks';
import LineBreak from '../../components/LineBreak';

const OtpVerification = () => {
  const {navigateToRoute} = useCustomNavigation();

  return (
    <View style={{flex: 1, backgroundColor: AppColors.WHITE}}>
      <AppHeader onBackPress heading={'OTP Code Verification'} />

      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          gap: 60,
          alignItems: 'center',
          paddingHorizontal: responsiveWidth(5),
        }}>
        <AppText
          title={'Code has been send to +1 111 ******99'}
          textColor={AppColors.BLACK}
          textSize={2.1}
        />
        <View>
          <OtpInput
            numberOfDigits={4}
            type="numeric"
            focusColor={AppColors.BTNCOLOURS}
            onFilled={text => console.log(`OTP is ${text}`)}
            onTextChange={text => console.log(text)}
            theme={{
              pinCodeContainerStyle: {
                backgroundColor: AppColors.WHITE,
                borderRadius: 15,
                width: responsiveWidth(19.5),
              },
              filledPinCodeContainerStyle: {backgroundColor: '#f2f1ff'},
              pinCodeTextStyle: {color: AppColors.BLACK},
            }}
          />
        </View>
        <AppText
          title={'Resend code in 53 s'}
          textColor={AppColors.BLACK}
          textSize={2.1}
        />
      </View>

      <View
        style={{
          paddingHorizontal: responsiveWidth(5),
        }}>
        <AppButton
          title={'Verify'}
          textColor={AppColors.WHITE}
          textSize={2}
          btnPadding={15}
          handlePress={() => navigateToRoute('CreateNewPassword')}
        />
      </View>
      <LineBreak space={2} />
    </View>
  );
};

export default OtpVerification;
