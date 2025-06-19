/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import AppColors from '../utils/AppColors';
import AppText from './AppTextComps/AppText';

const LineTab = ({data, setIsSelectedTab, isSelectedTab, textwidth}: any) => {
  return (
    <FlatList
      data={data}
      horizontal
      contentContainerStyle={{flex: 1, justifyContent: 'space-evenly'}}
      renderItem={({item}) => {
        return (
          <TouchableOpacity onPress={() => setIsSelectedTab({id: item.id})}>
            <AppText
              title={item.title}
              textColor={
                isSelectedTab.id === item.id
                  ? AppColors.BTNCOLOURS
                  : AppColors.DARKGRAY
              }
              textFontWeight
              textSize={2}
              borderBottomWidth={isSelectedTab.id === item.id ? 4 : 4}
              textwidth={textwidth ? textwidth : 30}
              borderBottomColor={
                isSelectedTab.id === item.id
                  ? AppColors.BTNCOLOURS
                  : AppColors.WHITE
              }
              paddingBottom={2}
              textAlignment={'center'}
            />
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default LineTab;
