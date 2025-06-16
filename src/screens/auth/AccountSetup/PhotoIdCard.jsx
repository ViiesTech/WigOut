/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import BackgroundScreen from '../../../components/AppTextComps/BackgroundScreen';
import AppHeader from '../../../components/AppHeader';
import {useNavigation} from '@react-navigation/native';
import LineBreak from '../../../components/LineBreak';
import AppText from '../../../components/AppTextComps/AppText';
import AppColors from '../../../utils/AppColors';
import AppImages from '../../../assets/images/AppImages';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../../utils/Responsive_Dimensions';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const icons = [
  {
    id: 1,
    icon: (
      <FontAwesome5
        name={'image'}
        size={responsiveFontSize(2.5)}
        color={AppColors.BLACK}
      />
    ),
  },
  {
    id: 2,
    icon: (
      <MaterialCommunityIcons
        name={'line-scan'}
        size={responsiveFontSize(4)}
        color={AppColors.BLACK}
      />
    ),
  },
  {
    id: 3,
    icon: (
      <FontAwesome5
        name={'folder-minus'}
        size={responsiveFontSize(2.5)}
        color={AppColors.BLACK}
      />
    ),
  },
];

const PhotoIdCard = () => {
  const navigation = useNavigation();

  return (
    <BackgroundScreen>
      <AppHeader onBackPress={() => navigation.goBack()} />

      <LineBreak space={4} />

      <View>
        <AppText
          title={'Photo ID Card'}
          textSize={3.5}
          textColor={AppColors.WHITE}
          textAlignment={'center'}
          textFontWeight
        />

        <LineBreak space={2} />

        <AppText
          title={'Please point the camera at the ID card'}
          textSize={2}
          textColor={AppColors.LIGHTGRAY}
          textAlignment={'center'}
        />
      </View>

      <LineBreak space={4} />

      <Image
        source={AppImages.SCAN_IMAGE}
        resizeMode="contain"
        style={{width: responsiveWidth(85), alignSelf: 'center'}}
      />

      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            paddingVertical: responsiveHeight(2),
            paddingHorizontal: responsiveWidth(12),
          }}>
          {icons.map(item => (
            <View key={item.id}>
              <TouchableOpacity
              onPress={() => navigation.navigate('SelfieWithIdCard')}
                style={{
                  padding: item.id == 2 ? responsiveWidth(6) : responsiveWidth(4),
                  borderRadius: 100,
                  backgroundColor:
                    item.id == 2 ? AppColors.BTNCOLOURS : AppColors.WHITE,
                }}>
                {item.icon}
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>
    </BackgroundScreen>
  );
};

export default PhotoIdCard;
