/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import BackgroundScreen from '../../../components/AppTextComps/BackgroundScreen';
import {useNavigation} from '@react-navigation/native';
import AppHeader from '../../../components/AppHeader';
import AppButton from '../../../components/AppButton';
import AppColors from '../../../utils/AppColors';
import AppText from '../../../components/AppTextComps/AppText';
import {OtpInput} from 'react-native-otp-entry';
import {responsiveWidth} from '../../../utils/Responsive_Dimensions';

const CreateNewPin = () => {
  const navigation = useNavigation();
  return (
    <BackgroundScreen>
      <AppHeader
        onBackPress={() => navigation.goBack()}
        heading={'Create New PIN'}
      />

      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          gap: 60,
          alignItems: 'center',
        }}>
        <AppText
          title={'Add a PIN number to make your account more secure.'}
          textColor={AppColors.LIGHTGRAY}
          textSize={2.2}
          textAlignment={'center'}
        />
        <View>
          <OtpInput
            numberOfDigits={4}
            type="numeric"
            secureTextEntry
            onFilled={text => console.log(`OTP is ${text}`)}
            onTextChange={text => console.log(text)}
            theme={{
              pinCodeContainerStyle: {
                backgroundColor: AppColors.WHITE,
                borderRadius: 15,
                width: responsiveWidth(19.5),
              },
              filledPinCodeContainerStyle: {backgroundColor: '#1a2340'},
              pinCodeTextStyle: {color: AppColors.WHITE},
            }}
          />
        </View>
      </View>

      <View>
        <AppButton
          title={'Continue'}
          textColor={AppColors.BLACK}
          textSize={2}
          handlePress={() => navigation.navigate('SetFingerPrint')}
        />
      </View>
    </BackgroundScreen>
  );
};

export default CreateNewPin;
