/* eslint-disable eqeqeq */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, ScrollView, FlatList, Image, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AppHeader from '../../../components/AppHeader';
import LineBreak from '../../../components/LineBreak';
import AppColors from '../../../utils/AppColors';
import LineTab from '../../../components/LineTab';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../../utils/Responsive_Dimensions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppText from '../../../components/AppTextComps/AppText';
import AppButton from '../../../components/AppButton';
import AppImages from '../../../assets/images/AppImages';

const tabsData = [
  {id: 1, title: 'List'},
  {id: 2, title: 'Calendar View'},
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

const VisitHistory = () => {
  const navigation = useNavigation();
  const [isSelectedTab, setIsSelectedTab] = useState({id: 1});

  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1, backgroundColor: AppColors.WHITE}}>
      <AppHeader
        onBackPress={() => navigation.goBack()}
        heading={'Visit History'}
      />
      <LineBreak space={4} />

      <View style={{paddingHorizontal: responsiveWidth(5)}}>
        <LineTab
          data={tabsData}
          isSelectedTab={isSelectedTab}
          setIsSelectedTab={setIsSelectedTab}
          textwidth={46}
        />
      </View>
      <LineBreak space={3} />

      {isSelectedTab.id == 1 && (
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
                    marginHorizontal: responsiveWidth(5),
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
                          <AppButton
                            title={'View Details'}
                            textSize={1.2}
                            btnPadding={5}
                            btnBackgroundColor={AppColors.BTNCOLOURS}
                            btnWidth={20}
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
      )}

      {isSelectedTab.id == 2 && (
        <View>
          <Text>gdfgdfgdfgdf</Text>
        </View>
      )}
    </ScrollView>
  );
};

export default VisitHistory;
