/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import AppImages from '../assets/images/AppImages';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../utils/Responsive_Dimensions';
import AppHeader from './AppHeader';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import AppColors from '../utils/AppColors';

const slides = [
  {
    key: '1',
    image: AppImages.FASTIVAL_BIG,
  },
  {
    key: '2',
    image: AppImages.FASTIVAL_BIG,
  },
  {
    key: '3',
    image: AppImages.FASTIVAL_BIG,
  },
];

const ImageIntroSlider = ({setIshowSharingModal}: any) => {
  const navigation = useNavigation();
  const renderItem = ({item}: any) => {
    return (
      <ImageBackground source={item.image} style={styles.image}>
        <View
          style={{
            paddingHorizontal: responsiveWidth(4),
            paddingVertical: responsiveHeight(4),
          }}>
          <AppHeader
            onBackPress={() => navigation.goBack()}
            rightIcon={
              <View style={{flexDirection: 'row', gap: 20}}>
                <TouchableOpacity>
                  <AntDesign
                    name={'hearto'}
                    size={responsiveFontSize(2.5)}
                    color={AppColors.WHITE}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setIshowSharingModal(true)}>
                  <Feather
                    name={'send'}
                    size={responsiveFontSize(2.5)}
                    color={AppColors.WHITE}
                  />
                </TouchableOpacity>
              </View>
            }
          />
        </View>
      </ImageBackground>
    );
  };

  return (
    <View style={{width: responsiveWidth(100), height: responsiveHeight(50)}}>
      <AppIntroSlider
        data={slides}
        renderItem={renderItem}
        showSkipButton={false}
        showNextButton={false}
        showDoneButton={false}
        dotStyle={{backgroundColor: '#ccc',
          height: responsiveWidth(2),
          width: responsiveWidth(2),
        }}
        activeDotStyle={{
          backgroundColor: '#584CF4',
          width: responsiveWidth(10),
          height: responsiveWidth(1.5),
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: responsiveWidth(100),
    height: responsiveHeight(50),
  },
});

export default ImageIntroSlider;
