/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import AppColors from '../../utils/AppColors';
import AppHeader from '../../components/AppHeader';
import LineBreak from '../../components/LineBreak';
import AppImages from '../../assets/images/AppImages';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../utils/Responsive_Dimensions';
import AppText from '../../components/AppTextComps/AppText';
import AppTextInput from '../../components/AppTextInput';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AppButton from '../../components/AppButton';
import SVGXml from '../../components/SVGXML';
import {AppIcons} from '../../assets/icons';

const socialIcons = [
  {
    id: 1,
    icon: <SVGXml icon={AppIcons.facebook_rounded} width={20} height={20} />,
  },
  {
    id: 2,
    icon: <SVGXml icon={AppIcons.google_pay} width={20} height={20} />,
  },
  {
    id: 3,
    icon: <SVGXml icon={AppIcons.black_apple} width={20} height={20} />,
  },
];

const SignUp = () => {
  const [isFocused, setIsFocused] = useState({email: false, password: false});
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <ScrollView style={{flex: 1, backgroundColor: AppColors.WHITE}}>
      <AppHeader onBackPress />

      <View style={{paddingHorizontal: responsiveWidth(5)}}>
        <View style={{alignItems: 'center'}}>
          <Image
            source={AppImages.signup_logo}
            style={{
              width: responsiveWidth(100),
              height: responsiveHeight(25),
              alignSelf: 'center',
            }}
            resizeMode="contain"
          />
          <LineBreak space={2} />

          <AppText
            title={'Create New Account'}
            textAlignment={'center'}
            textColor={AppColors.BLACK}
            textFontWeight
            textSize={3}
          />
          <LineBreak space={4} />

          <View>
            <View>
              <AppTextInput
                inputPlaceHolder={'Email'}
                inputWidth={70}
                isFocused={isFocused.email}
                onFocus={() => setIsFocused(prev => ({...prev, email: true}))}
                onBlur={() => setIsFocused(prev => ({...prev, email: false}))}
                placeholderTextColor={AppColors.BLACK}
                logo={
                  <MaterialIcons
                    name={'email'}
                    size={responsiveFontSize(2)}
                    color={
                      isFocused.email ? AppColors.BTNCOLOURS : AppColors.GRAY
                    }
                  />
                }
              />
            </View>
            <LineBreak space={2} />
            <View>
              <AppTextInput
                inputPlaceHolder={'Password'}
                inputWidth={70}
                isFocused={isFocused.password}
                placeholderTextColor={AppColors.BLACK}
                onFocus={() =>
                  setIsFocused(prev => ({...prev, password: true}))
                }
                onBlur={() =>
                  setIsFocused(prev => ({...prev, password: false}))
                }
                logo={
                  <MaterialIcons
                    name={'lock'}
                    size={responsiveFontSize(2)}
                    color={
                      isFocused.password ? AppColors.BTNCOLOURS : AppColors.GRAY
                    }
                  />
                }
                rightIcon={
                  <TouchableOpacity
                    onPress={() => setShowPassword(prevState => !prevState)}>
                    <FontAwesome
                      name={showPassword ? 'eye' : 'eye-slash'}
                      size={responsiveFontSize(2)}
                      color={
                        isFocused.password
                          ? AppColors.BTNCOLOURS
                          : AppColors.GRAY
                      }
                    />
                  </TouchableOpacity>
                }
                secureTextEntry={!showPassword}
              />
            </View>
            <LineBreak space={4} />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 15,
                alignSelf: 'center',
              }}>
              <TouchableOpacity
                style={{
                  height: responsiveHeight(3),
                  width: responsiveHeight(3),
                  borderWidth: rememberMe ? 0 : 3,
                  borderRadius: 7,
                  borderColor: AppColors.BTNCOLOURS,
                  backgroundColor: rememberMe
                    ? AppColors.BTNCOLOURS
                    : 'transparent',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => setRememberMe(prevState => !prevState)}>
                {rememberMe ? (
                  <FontAwesome
                    name={'check'}
                    size={responsiveFontSize(1.7)}
                    color={AppColors.WHITE}
                  />
                ) : (
                  <View />
                )}
              </TouchableOpacity>
              <AppText
                title={'Remember me'}
                textColor={AppColors.BLACK}
                textSize={2}
              />
            </View>
            <LineBreak space={4} />
            <View style={{alignItems: 'center'}}>
              <AppButton
                title={'SignUp'}
                handlePress={() => {}}
                textSize={1.8}
                btnPadding={18}
                btnWidth={90}
              />
              <LineBreak space={6} />
              <View
                style={{flexDirection: 'row', gap: 20, alignItems: 'center'}}>
                <View
                  style={{
                    backgroundColor: AppColors.GRAY,
                    width: responsiveWidth(24),
                    height: responsiveHeight(0.1),
                  }}
                />
                <AppText
                  title={'or continue with'}
                  textAlignment={'center'}
                  textColor={AppColors.GRAY}
                  textSize={2}
                />
                <View
                  style={{
                    backgroundColor: AppColors.GRAY,
                    width: responsiveWidth(24),
                    height: responsiveHeight(0.1),
                  }}
                />
              </View>
              <LineBreak space={2} />
              <View>
                <FlatList
                  data={socialIcons}
                  horizontal
                  contentContainerStyle={{justifyContent: 'center'}}
                  renderItem={({item}) => {
                    return <View>{item.icon}</View>;
                  }}
                />
              </View>
              <LineBreak space={2} />
              <View
                style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
                <AppText
                  title={'Already have an account?'}
                  textAlignment={'center'}
                  textColor={AppColors.GRAY}
                  textSize={2}
                />
                <TouchableOpacity onPress={() => {}}>
                  <AppText
                    title={'Sign in'}
                    textAlignment={'center'}
                    textColor={AppColors.BTNCOLOURS}
                    textSize={2}
                    textFontWeight
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;
