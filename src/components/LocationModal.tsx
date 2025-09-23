/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Install this library if not already
import AppTextInput from './AppTextInput';
import AppButton from './AppButton';
import AppColors from '../utils/AppColors';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../utils/Responsive_Dimensions';
import AppText from './AppTextComps/AppText';
import LineBreak from './LineBreak';

type ModalProps = {
  value?: any;
  onChangeText?: any;
  handlePress?: any;
  loading?: any;
};

const LocationModal = ({value, onChangeText, handlePress, loading}: ModalProps) => {
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
            textColor={AppColors.BLACK}
            textAlignment={'center'}
            textFontWeight
          />
          <View
            style={{
              borderTopWidth: 1,
              borderBottomWidth: 1,
              borderBottomColor: AppColors.appBgColor,
              borderTopColor: AppColors.appBgColor,
              paddingVertical: responsiveHeight(3),
            }}>
            <AppTextInput
              inputPlaceHolder={'Times Square NYC, Manhattan'}
              inputWidth={73}
              value={value}
              onChangeText={onChangeText}
              rightIcon={
                <Icon
                  name="location-sharp"
                  size={responsiveFontSize(2)}
                  color={AppColors.BLACK}
                />
              }
            />
          </View>
          <AppButton
            title={'Continue'}
            textColor={AppColors.WHITE}
            textSize={2}
            btnPadding={18}
            handlePress={handlePress}
            loading={loading}
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
    backgroundColor: AppColors.WHITE,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: responsiveHeight(35),
    width: responsiveWidth(100),
    paddingHorizontal: responsiveWidth(5),
  },
});

export default LocationModal;
