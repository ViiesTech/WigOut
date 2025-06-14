/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  StyleSheet,
  Modal,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; // Install this library if not already
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

const starIcons = [
  {
    id: 1,
    icon: (
      <MaterialIcons
        name={'star'}
        size={responsiveFontSize(4.5)}
        color={AppColors.WHITE}
      />
    ),
  },
  {
    id: 2,
    icon: (
      <MaterialIcons
        name={'star'}
        size={responsiveFontSize(4.5)}
        color={AppColors.WHITE}
      />
    ),
  },
  {
    id: 3,
    icon: (
      <MaterialIcons
        name={'star'}
        size={responsiveFontSize(4.5)}
        color={AppColors.WHITE}
      />
    ),
  },
  {
    id: 4,
    icon: (
      <MaterialIcons
        name={'star'}
        size={responsiveFontSize(4.5)}
        color={AppColors.WHITE}
      />
    ),
  },
  {
    id: 5,
    icon: (
      <MaterialIcons
        name={'star-outline'}
        size={responsiveFontSize(4.5)}
        color={AppColors.WHITE}
      />
    ),
  },
];

const CancelBookingModal = ({
  visible,
  handleApplyOnPress,
  handleResetOnPress,
}: any) => {
  return (
    <Modal visible={visible} transparent={true} animationType="slide">
      <View style={styles.container}>
        <View style={styles.modal}>
          <View>
            <LineBreak space={0.7} />

            <View
              style={{
                backgroundColor: AppColors.LIGHTGRAY,
                borderRadius: 100,
                height: responsiveHeight(0.5),
                width: responsiveWidth(10),
                alignSelf: 'center',
              }}
            />
            <LineBreak space={3} />
            <View>
              <AppText
                title={'Cancel Booking'}
                textSize={2.5}
                textColor={AppColors.WHITE}
                textAlignment={'center'}
                textFontWeight
              />
              <LineBreak space={3} />
              <View
                style={{
                  borderTopWidth: 1,
                  borderTopColor: AppColors.DARKGRAY,
                  paddingVertical: responsiveHeight(3),
                }}>
                <AppText
                  title={'Are you sure you want to cancel this event?'}
                  textSize={2}
                  textColor={AppColors.WHITE}
                  textFontWeight
                  textAlignment={'center'}
                  textwidth={60}
                  lineHeight={2.7}
                />

                <LineBreak space={1.5} />

                <AppText
                  title={
                    'Only 80% of funds will be returned to your account according to our policy.'
                  }
                  textSize={2}
                  textColor={AppColors.LIGHTGRAY}
                  textAlignment={'center'}
                  textwidth={70}
                  lineHeight={2.7}
                />
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <AppButton
                  title={'No, Don’t Cancel'}
                  textColor={AppColors.BLACK}
                  textSize={2}
                  handlePress={handleResetOnPress}
                  btnWidth={43}
                  btnPadding={15}
                  btnBackgroundColor={AppColors.WHITE}
                />
                <AppButton
                  title={'Yes, Cancel'}
                  textColor={AppColors.BLACK}
                  textSize={2}
                  handlePress={handleApplyOnPress}
                  btnWidth={43}
                  btnPadding={15}
                />
              </View>
              <LineBreak space={1} />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CancelBookingModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modal: {
    backgroundColor: '#474747',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    height: responsiveHeight(38),
    width: responsiveWidth(100),
    paddingHorizontal: responsiveWidth(5),
  },
  labelContainer: {
    position: 'absolute',
    bottom: 0,
    left: responsiveWidth(-5),
    alignItems: 'center',
  },
  labelText: {
    backgroundColor: AppColors.THEME_COLOR,
    color: AppColors.WHITE,
    paddingHorizontal: 5,
    paddingVertical: 2,
    fontSize: responsiveFontSize(1.3),
    borderRadius: 5,
  },
});
