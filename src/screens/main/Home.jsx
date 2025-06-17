/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import AppColors from '../../utils/AppColors';
import LineBreak from '../../components/LineBreak';
import AppImages from '../../assets/images/AppImages';
import AppText from '../../components/AppTextComps/AppText';
import {AppIcons} from '../../assets/icons';
import SVGXml from '../../components/SVGXML';
import {useCustomNavigation} from '../../utils/Hooks';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../utils/Responsive_Dimensions';
import AppTextInput from '../../components/AppTextInput';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Home = () => {
  const {navigateToRoute} = useCustomNavigation();
  return (
    <ScrollView style={{flex: 1, backgroundColor: AppColors.WHITE}}>
      <LineBreak space={3} />

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: responsiveWidth(5),
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 18}}>
          <TouchableOpacity>
            <Image
              source={AppImages.FACE_SCAN}
              style={{width: 50, height: 50, borderRadius: 100}}
            />
          </TouchableOpacity>
          <View style={{gap: 2}}>
            <AppText
              title={'Good Morning 👋'}
              textColor={AppColors.GRAY}
              textSize={1.7}
            />
            <AppText
              title={'Andrew Ainsley'}
              textColor={AppColors.BLACK}
              textSize={2.2}
              textFontWeight
            />
          </View>
        </View>
        <View style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => navigateToRoute('Notifications')}
            style={{
              borderWidth: 1,
              borderColor: AppColors.WHITE,
              padding: responsiveWidth(2),
              borderRadius: 100,
            }}>
            <SVGXml
              width={'25'}
              height={'25'}
              icon={AppIcons.notification_black}
            />
          </TouchableOpacity>
        </View>
      </View>

      <LineBreak space={3} />

      <View
        style={{
          paddingHorizontal: responsiveWidth(5),
        }}>
        <AppTextInput
          inputPlaceHolder={'What event are you looking for...'}
          inputWidth={64}
          logo={
            <Ionicons
              name={'search'}
              size={responsiveFontSize(2.5)}
              color={AppColors.LIGHTGRAY}
            />
          }
          rightIcon={
            <FontAwesome6
              name={'sliders'}
              size={responsiveFontSize(2.5)}
              color={AppColors.LIGHTGRAY}
            />
          }
        />
      </View>

      <LineBreak space={3} />

      <View>
        <ImageBackground
          source={AppImages.home_bg}
          style={{
            width: responsiveWidth(88),
            height: responsiveHeight(32),
            alignSelf: 'center',
            alignItems: 'center',
          }}
          imageStyle={{borderRadius: 20}}
          >
          <FontAwesome6
            name={'sliders'}
            size={responsiveFontSize(2.5)}
            color={AppColors.LIGHTGRAY}
          />
        </ImageBackground>
      </View>
    </ScrollView>
  );
};

export default Home;
