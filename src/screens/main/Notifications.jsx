/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, TouchableOpacity, FlatList} from 'react-native';
import LineBreak from '../../components/LineBreak';
import AppHeader from '../../components/AppHeader';
import AppColors from '../../utils/AppColors';
import {
  responsiveFontSize,
  responsiveWidth,
} from '../../utils/Responsive_Dimensions';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AppText from '../../components/AppTextComps/AppText';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

const notificationData = [
  {
    id: 1,
    icon: (
      <View
        style={{
          backgroundColor: '#f2f1fe',
          padding: responsiveWidth(3.5),
          borderRadius: 100,
        }}>
        <Ionicons
          name={'calendar'}
          size={responsiveFontSize(2.2)}
          color={AppColors.BTNCOLOURS}
        />
      </View>
    ),
    title: 'Booking Successful!',
    description:
      'You have successfully booked the Art Workshops. The event will be held on Sunday, December 22, 2022, 13.00 - 14.00 PM. Don"t forget to activate your reminder. Enjoy the event!',
    date: '20 Dec, 2022 | 20:49 PM',
    badge: 'New',
  },
  {
    id: 2,
    icon: (
      <View
        style={{
          backgroundColor: '#f2f1fe',
          padding: responsiveWidth(3.5),
          borderRadius: 100,
        }}>
        <Ionicons
          name={'calendar'}
          size={responsiveFontSize(2.2)}
          color={AppColors.BTNCOLOURS}
        />
      </View>
    ),
    title: 'Booking Successful!',
    description:
      'You have successfully booked the National Music Festival. The event will be held on Monday, December 24, 2022, 18.00 - 23.00 PM. Don"t forget to activate your reminder. Enjoy the event!',
    date: '19 Dec, 2022 | 18:35 PM',
    badge: 'New',
  },
  {
    id: 3,
    icon: (
      <View
        style={{
          backgroundColor: '#FF98002E',
          padding: responsiveWidth(3.5),
          borderRadius: 100,
        }}>
        <MaterialCommunityIcons
          name={'ticket'}
          size={responsiveFontSize(2.2)}
          color={AppColors.PEACHCOLOUR}
        />
      </View>
    ),
    title: 'New Services Available!',
    description:
      'You can now make multiple book events at once. You can also cancel your booking.',
    date: '19 Dec, 2022 | 18:35 PM',
  },
  {
    id: 4,
    icon: (
      <View
        style={{
          backgroundColor: '#246BFD2E',
          padding: responsiveWidth(3.5),
          borderRadius: 100,
        }}>
        <Ionicons
          name={'wallet'}
          size={responsiveFontSize(2.2)}
          color={'#246BFD'}
        />
      </View>
    ),
    title: 'Credit Card Connected!',
    description:
      'Your credit card has been successfully linked with Eveno. Enjoy our service..',
    date: '19 Dec, 2022 | 18:35 PM',
  },
  {
    id: 5,
    icon: (
      <View
        style={{
          backgroundColor: '#4CAF502E',
          padding: responsiveWidth(3.5),
          borderRadius: 100,
        }}>
        <FontAwesome6
          name={'user'}
          size={responsiveFontSize(2.2)}
          color={'#22BB9C'}
        />
      </View>
    ),
    title: 'Account Setup Successful!',
    description:
      'Your account creation is successful, you can now experience our services.',
    date: '19 Dec, 2022 | 18:35 PM',
  },
];

const Notifications = ({navigation}) => {
  return (
    <View>
      <LineBreak space={3} />
      <AppHeader
        onBackPress={() => navigation.goBack()}
        heading={'Notification'}
        rightIcon={
          <TouchableOpacity onPress={() => {}}>
            <AntDesign
              name={'message1'}
              size={responsiveFontSize(2.5)}
              color={AppColors.WHITE}
            />
          </TouchableOpacity>
        }
      />
      <LineBreak space={3} />

      {/* <View style={{flex: 0.7, justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={AppImages.FILE}
          resizeMode="contain"
          style={{
            width: responsiveWidth(90),
            height: responsiveHeight(35),
          }}
        />
        <LineBreak space={4} />
        <AppText
          title={'Empty'}
          textColor={AppColors.WHITE}
          textSize={2.5}
          textFontWeight
          textAlignment={'center'}
        />
        <LineBreak space={1} />
        <AppText
          title={'You don"t have any notifications at this time'}
          textColor={AppColors.LIGHTGRAY}
          textSize={2}
          textAlignment={'center'}
          lineHeight={3.5}
        />
      </View> */}

      <FlatList
        data={notificationData}
        ItemSeparatorComponent={() => <LineBreak space={2} />}
        renderItem={({item}) => {
          return (
            <View style={{paddingHorizontal: responsiveWidth(5)}}>
              <View style={{gap: 20}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 13,
                    }}>
                    {item.icon}
                    <View>
                      <AppText
                        title={item.title}
                        textColor={AppColors.BLACK}
                        textSize={2.2}
                        textFontWeight
                      />
                      <AppText
                        title={item.date}
                        textColor={AppColors.GRAY}
                        textSize={1.5}
                      />
                    </View>
                  </View>
                  {item?.badge && (
                    <View
                      style={{
                        backgroundColor: AppColors.BTNCOLOURS,
                        padding: responsiveWidth(2),
                        borderRadius: 10,
                      }}>
                      <AppText
                        title={item?.badge}
                        textColor={AppColors.WHITE}
                        textSize={1.2}
                        textFontWeight
                      />
                    </View>
                  )}
                </View>
                <AppText
                  title={item?.description}
                  textColor={AppColors.GRAY}
                  textSize={1.5}
                  lineHeight={2.5}
                />
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Notifications;
