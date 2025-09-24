/* eslint-disable no-undef */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, TouchableOpacity, View} from 'react-native';
import AppHeader from '../../components/AppHeader';
import AppButton from '../../components/AppButton';
import AppColors from '../../utils/AppColors';
import AppText from '../../components/AppTextComps/AppText';
import {OtpInput} from 'react-native-otp-entry';
import {responsiveWidth} from '../../utils/Responsive_Dimensions';
import {useCustomNavigation} from '../../utils/Hooks';
import LineBreak from '../../components/LineBreak';
import {useRoute} from '@react-navigation/native';
import {
  forgotPassword,
  verifyOtpForResetPassword,
} from '../../GlobalFunctions/auth';
import {ShowToast} from '../../utils/api_content';

const RESEND_TIME = 60;

const OtpVerification = () => {
  const {navigateToRoute} = useCustomNavigation();
  const email = useRoute()?.params?.email;
  const userId = useRoute()?.params?.userId;
  const [otp, setOtp] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [timer, setTimer] = useState(RESEND_TIME);

  const handleVerifyOtp = async () => {
    if (!otp) {
      return ShowToast('error', 'OTP is required');
    }

    setIsLoading(true);
    const res = await verifyOtpForResetPassword({email, otp});
    if (res.success) {
      ShowToast('success', res?.msg);
      navigateToRoute('CreateNewPassword', {userId});
    } else {
      ShowToast('error', res?.msg || res?.message);
    }
    setIsLoading(false);
  };

  const handleResendOtp = async () => {
    if (!isResending && !timer) {
      setIsResending(true);
      setTimer(RESEND_TIME); // restart timer
      const res = await forgotPassword({email});
      if (res?.success) {
        ShowToast('success', res?.msg);
        setIsResending(false);
      } else {
        ShowToast('error', 'Failed to resend OTP');
        setIsResending(false);
      }
    }
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (timer > 0) {
      interval = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [timer]);

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
          title={`Code has been send to ${email}`}
          textColor={AppColors.BLACK}
          textSize={2.1}
        />
        <View>
          <OtpInput
            numberOfDigits={4}
            type="numeric"
            focusColor={AppColors.BTNCOLOURS}
            onFilled={text => console.log(`OTP is ${text}`)}
            onTextChange={text => setOtp(text)}
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
        {isResending ? (
          <ActivityIndicator size={'small'} color={'#000'} />
        ) : (
          <TouchableOpacity onPress={() => handleResendOtp()}>
            <AppText
              title={`Resend Code ${timer ? `(${timer}s)` : ''}`}
              textColor={AppColors.BLACK}
              textSize={2.1}
            />
          </TouchableOpacity>
        )}
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
          handlePress={() => handleVerifyOtp()}
          loading={isLoading}
        />
      </View>
      <LineBreak space={2} />
    </View>
  );
};

export default OtpVerification;
