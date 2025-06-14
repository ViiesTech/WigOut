/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Install this library if not already
import AppTextInput from './AppTextInput';
import AppButton from './AppButton';
import AppColors from '../utils/AppColors';
import {useNavigation} from '@react-navigation/native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../utils/Responsive_Dimensions';
import AppText from './AppTextComps/AppText';
import LineBreak from './LineBreak';

// type ModalProps = {
//   visible?: any;
//   setVisible?: any;
//   onClose?: any;
//   location?: any;
//   onLocationChange?: any;
//   onContinue?: any;
// };

const LocationModal = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.modal}>
      <View>
        <LineBreak space={0.7} />

        <View
          style={{
            backgroundColor: AppColors.WHITE,
            borderRadius: 100,
            height: responsiveHeight(0.5),
            width: responsiveWidth(10),
            alignSelf: 'center',
          }}
        />
        <LineBreak space={3} />
        <View style={{gap: 20}}>
          <AppText
            title={'Location'}
            textSize={2.5}
            textColor={AppColors.WHITE}
            textAlignment={'center'}
            textFontWeight
          />
          <View
            style={{
              borderTopWidth: 1,
              borderBottomWidth: 1,
              borderBottomColor: AppColors.WHITE,
              borderTopColor: AppColors.WHITE,
              paddingVertical: responsiveHeight(3),
            }}>
            <AppTextInput
              inputPlaceHolder={'Times Square NYC, Manhattan'}
              inputWidth={73}
              rightIcon={
                <Icon
                  name="location-sharp"
                  size={responsiveFontSize(2)}
                  color="#fff"
                />
              }
            />
          </View>
          <AppButton
            title={'Continue'}
            textColor={AppColors.BLACK}
            textSize={2}
            handlePress={() => {
              navigation.navigate('PhotoIdCard');
            }}
          />

          <LineBreak space={1} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modal: {
    backgroundColor: '#2f2f2f',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: responsiveHeight(35),
    width: responsiveWidth(100),
    paddingHorizontal: responsiveWidth(5),
  },
});

export default LocationModal;
