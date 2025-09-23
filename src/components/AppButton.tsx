/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { ActivityIndicator, TouchableOpacity } from 'react-native';
import AppColors from '../utils/AppColors';
import AppText from './AppTextComps/AppText';
import { responsiveWidth } from '../utils/Responsive_Dimensions';

type props = {
  title?: any;
  handlePress?: () => void;
  textColor?: any;
  textFontWeight?: boolean;
  textSize?: any;
  btnWidth?: any;
  btnBackgroundColor?: any;
  btnPadding?: any;
  borderWidth?: any;
  borderColor?: any;
  borderRadius?: any;
  leftIcon?: any;
  activeOpacity?: any;
  loading?: any;
};
const AppButton = ({
  title,
  handlePress,
  leftIcon,
  borderRadius,
  borderWidth,
  borderColor,
  btnPadding,
  btnBackgroundColor,
  btnWidth,
  textColor = AppColors.WHITE,
  textFontWeight = true,
  textSize = 2.5,
  activeOpacity,
  loading = false,
}: props) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={activeOpacity}
      style={{
        backgroundColor: btnBackgroundColor
          ? btnBackgroundColor
          : AppColors.BTNCOLOURS,
        alignItems: 'center',
        justifyContent: 'center',
        padding: btnPadding ? btnPadding : 10,
        borderRadius: borderRadius ? borderRadius : 100,
        width: btnWidth ? responsiveWidth(btnWidth) : 'auto',
        borderWidth: borderWidth || 0,
        borderColor: borderColor ? borderColor : null,
        flexDirection: 'row',
      }}
      disabled={loading}
    >
      {leftIcon}
      {loading ? <ActivityIndicator size={'small'} color={AppColors.WHITE} /> : <AppText
        textColor={textColor}
        textSize={textSize}
        title={title}
        textFontWeight={textFontWeight}
      />}
    </TouchableOpacity>
  );
};

export default AppButton;
