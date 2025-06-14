/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {View, FlatList} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from '../utils/Responsive_Dimensions';
import AppColors from '../utils/AppColors';
import AppText from './AppTextComps/AppText';
import LineBreak from './LineBreak';

const BioCard = ({data}: any) => {
  return (
    <View
      style={{
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderTopColor: AppColors.WHITE,
        borderBottomColor: AppColors.WHITE,
        paddingVertical: responsiveHeight(3),
      }}>
      <FlatList
        data={data}
        horizontal
        ItemSeparatorComponent={() => (
          <View
            style={{
              alignSelf: 'center',
              width: responsiveWidth(0.5),
              height: responsiveHeight(8),
              backgroundColor: '#fff',
              marginHorizontal: responsiveWidth(8),
            }}
          />
        )}
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        renderItem={({item}) => {
          return (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <AppText
                title={item.numOfCounts}
                textColor={AppColors.WHITE}
                textSize={3}
                textFontWeight
              />
              <LineBreak space={1} />
              <AppText
                title={item.title}
                textColor={AppColors.WHITE}
                textSize={1.8}
              />
            </View>
          );
        }}
      />
    </View>
  );
};

export default BioCard;
