/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AppHeader from '../../../components/AppHeader';
import LineBreak from '../../../components/LineBreak';
import AppImages from '../../../assets/images/AppImages';
import AppColors from '../../../utils/AppColors';
import {
  responsiveFontSize,
  responsiveWidth,
} from '../../../utils/Responsive_Dimensions';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AppTextInput from '../../../components/AppTextInput';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import PhoneInputScreen from '../../../components/PhoneInput';

const EditProfile = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={{flex: 1, backgroundColor: AppColors.WHITE}}>
      <AppHeader onBackPress={() => navigation.goBack()} heading={'Profile'} />
      <LineBreak space={2} />

      <View
        style={{
          gap: 20,
          paddingHorizontal: responsiveWidth(5),
        }}>
        <View style={{alignItems: 'center'}}>
          <ImageBackground
            source={AppImages.FACE_SCAN}
            style={{width: 100, height: 100, borderRadius: 100}}
            imageStyle={{borderRadius: 100, position: 'relative'}}>
            <TouchableOpacity
              style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                backgroundColor: AppColors.BTNCOLOURS,
                padding: 3,
                borderRadius: 5,
              }}>
              <MaterialIcons
                name={'edit'}
                size={responsiveFontSize(2.2)}
                color={AppColors.WHITE}
              />
            </TouchableOpacity>
          </ImageBackground>
        </View>

        <View>
          <AppTextInput inputPlaceHolder={'Andrew Ainsley'} />
        </View>
        <View>
          <AppTextInput inputPlaceHolder={'Andrew'} />
        </View>

        <View>
          <AppTextInput
            inputPlaceHolder={'12/27/1995'}
            inputWidth={72}
            rightIcon={
              <TouchableOpacity>
                <FontAwesome
                  name={'calendar'}
                  size={responsiveFontSize(2)}
                  color={AppColors.BLACK}
                />
              </TouchableOpacity>
            }
          />
        </View>

        <View>
          <AppTextInput
            inputPlaceHolder={'Male'}
            inputWidth={72}
            rightIcon={
              <TouchableOpacity>
                <MaterialIcons
                  name={'arrow-drop-down'}
                  size={responsiveFontSize(2.5)}
                  color={AppColors.BLACK}
                />
              </TouchableOpacity>
            }
          />
        </View>

        <View>
          <AppTextInput
            inputPlaceHolder={'andrew_ainsley@yourdomain.com'}
            inputWidth={72}
            rightIcon={
              <TouchableOpacity>
                <MaterialCommunityIcons
                  name={'email-outline'}
                  size={responsiveFontSize(2.5)}
                  color={AppColors.BLACK}
                />
              </TouchableOpacity>
            }
          />
        </View>

        <View>
          <PhoneInputScreen />
        </View>

        <View>
          <AppTextInput
            inputPlaceHolder={'United States'}
            inputWidth={72}
            rightIcon={
              <TouchableOpacity>
                <MaterialIcons
                  name={'arrow-drop-down'}
                  size={responsiveFontSize(2.5)}
                  color={AppColors.BLACK}
                />
              </TouchableOpacity>
            }
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default EditProfile;
