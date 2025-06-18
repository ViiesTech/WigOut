/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {FlatList, Image, ScrollView, View} from 'react-native';
import AppColors from '../../../utils/AppColors';
import LineBreak from '../../../components/LineBreak';
import AppHeader from '../../../components/AppHeader';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../../utils/Responsive_Dimensions';
import TopTabs from '../../../components/TopTabs';
import AppImages from '../../../assets/images/AppImages';
import AppText from '../../../components/AppTextComps/AppText';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppButton from '../../../components/AppButton';

const tabsData = [
  {id: 1, title: 'Go Again'},
  {id: 2, title: 'Avoid'},
  {id: 3, title: 'Help Me Decide'},
];

const data = [
  {
    id: 1,
    userImg: AppImages.resturant,
    username: 'Beauty Salon',
    location: 'Grand Park, New York',
  },
  {
    id: 2,
    userImg: AppImages.resturant,
    username: 'Beauty Salon',
    location: 'Grand Park, New York',
  },
  {
    id: 3,
    userImg: AppImages.resturant,
    username: 'Beauty Salon',
    location: 'Grand Park, New York',
  },
  {
    id: 4,
    userImg: AppImages.resturant,
    username: 'Beauty Salon',
    location: 'Grand Park, New York',
  },
];

const Lists = () => {
  const [isSelectedTab, setIsSelectedTab] = useState({id: 1});

  return (
    <ScrollView style={{flex: 1, backgroundColor: AppColors.WHITE}}>
      <AppHeader onBackPress heading={'Lists'} />

      <LineBreak space={3} />

      <View style={{paddingHorizontal: responsiveWidth(5)}}>
        <View>
          <TopTabs
            data={tabsData}
            isSelectedTab={isSelectedTab}
            setIsSelectedTab={setIsSelectedTab}
          />
        </View>

        <LineBreak space={3} />

        <View>
          <FlatList
            data={data}
            ItemSeparatorComponent={<LineBreak space={2} />}
            ListFooterComponent={<LineBreak space={2} />}
            renderItem={({item}) => {
              return (
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: AppColors.DARKGRAY,
                    paddingHorizontal: responsiveWidth(2),
                    paddingVertical: responsiveHeight(1),
                    borderRadius: 7,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      gap: 7,
                      alignItems: 'center',
                    }}>
                    <Image
                      source={item.userImg}
                      style={{width: 40, height: 40, borderRadius: 100}}
                    />
                    <View>
                      <AppText
                        title={item.username}
                        textColor={AppColors.BLACK}
                        textSize={1.7}
                        textFontWeight
                      />
                      {/* <LineBreak space={0.2} /> */}
                      <View
                        style={{
                          flexDirection: 'row',
                          width: '93%',
                          justifyContent: 'space-between',
                        }}>
                        <View
                          style={{
                            flexDirection: 'row',
                            gap: 3,
                            alignItems: 'center',
                          }}>
                          <Ionicons
                            name={'location'}
                            size={responsiveFontSize(1.3)}
                            color={AppColors.BTNCOLOURS}
                          />
                          <AppText
                            title={item.location}
                            textColor={AppColors.GRAY}
                            textSize={1.3}
                          />
                        </View>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: 5,
                          }}>
                          {isSelectedTab.id !== 3 && (
                            <AppButton
                              title={'Edit'}
                              textSize={1}
                              btnPadding={5}
                              btnBackgroundColor={AppColors.LIGHT_BTNCOLOURS}
                              btnWidth={10}
                              borderRadius={4}
                            />
                          )}
                          {isSelectedTab.id !== 3 && (
                            <AppButton
                              title={'Remove'}
                              textSize={1}
                              btnPadding={5}
                              btnBackgroundColor={'red'}
                              btnWidth={12}
                              borderRadius={4}
                            />
                          )}
                          <AppButton
                            title={'View Details'}
                            textSize={isSelectedTab.id == 3 ? 1.2 : 1}
                            btnPadding={isSelectedTab.id == 3 ? 8 : 5}
                            btnBackgroundColor={AppColors.BTNCOLOURS}
                            btnWidth={isSelectedTab.id == 3 ? 20 : 16}
                            borderRadius={4}
                          />
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Lists;
