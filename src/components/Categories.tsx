/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TouchableOpacity} from 'react-native';
import AppColors from '../utils/AppColors';
import AppText from './AppTextComps/AppText';
import {
  responsiveHeight,
  responsiveWidth,
} from '../utils/Responsive_Dimensions';

const Categories = ({
  item,
  isSelectedCategorie,
  SetIsSelectedCategorie,
  activeButtonBgColor,
  buttonFontSize,
}: any) => {
  return (
    <TouchableOpacity
      style={{
        borderWidth: 2,
        borderColor:
          isSelectedCategorie.id === item.id
            ? activeButtonBgColor
              ? activeButtonBgColor
              : AppColors.THEME_COLOR
            : AppColors.WHITE,
        paddingHorizontal: responsiveWidth(5),
        paddingVertical: responsiveHeight(0.8),
        borderRadius: 20,
        backgroundColor:
          isSelectedCategorie.id === item.id
            ? activeButtonBgColor
              ? activeButtonBgColor
              : AppColors.THEME_COLOR
            : null,
      }}
      onPress={() => SetIsSelectedCategorie({id: item.id})}>
      <AppText
        title={item.title}
        textColor={
          activeButtonBgColor && isSelectedCategorie.id === item.id
            ? AppColors.BLACK
            : AppColors.WHITE
        }
        textSize={buttonFontSize ? buttonFontSize : 1.8}
        textFontWeight
      />
    </TouchableOpacity>
  );
};

export default Categories;
