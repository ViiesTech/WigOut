/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import AppColors from '../utils/AppColors';
import AppText from './AppTextComps/AppText';
import {
  responsiveHeight,
  responsiveWidth,
} from '../utils/Responsive_Dimensions';

const TopTabs = ({
  data,
  setIsSelectedTab,
  isSelectedTab,
}: any) => {
  return (
    <FlatList
      data={data}
      horizontal
      contentContainerStyle={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: AppColors.LIGHT_BTNCOLOURS,
        borderRadius: 100,
      }}
      renderItem={({item}) => {
        return (
          <TouchableOpacity
            style={{
              backgroundColor:
                isSelectedTab?.id == item?.id
                  ? AppColors.BTNCOLOURS
                  : AppColors.LIGHT_BTNCOLOURS,
                  borderRadius: 100,
              paddingVertical: responsiveHeight(2),
              paddingHorizontal: responsiveWidth(7),
              justifyContent: 'center',
              alignItems: 'center',
            }}
            activeOpacity={0.8}
            onPress={() => setIsSelectedTab({id: item.id})}>
            <AppText
              title={item.title}
              textColor={
                isSelectedTab?.id == item?.id
                  ? AppColors.WHITE
                  : AppColors.WHITE
              }
              textSize={1.7}
              textFontWeight
              textAlignment={'center'}
            />
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default TopTabs;
