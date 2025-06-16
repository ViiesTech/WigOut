/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import AppHeader from '../../../components/AppHeader';
import AppButton from '../../../components/AppButton';
import AppColors from '../../../utils/AppColors';
import AppText from '../../../components/AppTextComps/AppText';
import {OtpInput} from 'react-native-otp-entry';
import {responsiveWidth} from '../../../utils/Responsive_Dimensions';
import {useCustomNavigation} from '../../../utils/Hooks';
import LineBreak from '../../../components/LineBreak';

const CreateNewPin = () => {
  const {navigateToRoute} = useCustomNavigation();

  return (
    <View style={{flex: 1, backgroundColor: AppColors.WHITE}}>
      <AppHeader onBackPress heading={'Create New PIN'} />

      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          gap: 60,
          alignItems: 'center',
          paddingHorizontal: responsiveWidth(5),
        }}>
        <AppText
          title={'Add a PIN number to make your account more secure.'}
          textColor={AppColors.BLACK}
          textSize={2.2}
          textAlignment={'center'}
        />
        <View>
          <OtpInput
            numberOfDigits={4}
            type="numeric"
            secureTextEntry
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
      </View>

      <View
        style={{
          paddingHorizontal: responsiveWidth(5),
        }}>
        <AppButton
          title={'Continue'}
          textColor={AppColors.WHITE}
          textSize={2}
          btnPadding={18}
          handlePress={() => navigateToRoute('FaceScanning')}
        />
      </View>
      <LineBreak space={4} />
    </View>
  );
};

export default CreateNewPin;
