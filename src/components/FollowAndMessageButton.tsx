/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
import AppText from './AppTextComps/AppText';
import AppColors from '../utils/AppColors';

const FollowAndMessageButton = ({data}) => {
  return (
    <FlatList
      data={data}
      horizontal
      contentContainerStyle={{gap: 20}}
      renderItem={({item}) => {
        return (
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
            <View style={item.style}>
              {item.icon()}
              <AppText
                title={item.title}
                textColor={AppColors.WHITE}
                textSize={2}
                textAlignment={'center'}
                textFontWeight
              />
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default FollowAndMessageButton;
