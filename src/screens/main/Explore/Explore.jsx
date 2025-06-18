/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageBackground,
} from 'react-native';
import AppText from '../../../components/AppTextComps/AppText';
import AppColors from '../../../utils/AppColors';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../../utils/Responsive_Dimensions';
import Entypo from 'react-native-vector-icons/Entypo';
import LineBreak from '../../../components/LineBreak';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CongratulationsModal from '../../../components/CongratulationsModal';
import AppImages from '../../../assets/images/AppImages';
import AppButton from '../../../components/AppButton';
import RecommendedCard from '../../../components/RecommendedCard';
import {oneData} from '../../../utils/LocalData';

const Explore = () => {
  const [showLocationModal, setShowLocationModal] = useState(false);

  return (
    <ImageBackground
      source={AppImages.big_map}
      style={{flex: 1, backgroundColor: AppColors.BLACK, alignItems: 'center'}}>
      <ScrollView style={{flex: 1}}>
        <LineBreak space={2} />
        <View
          style={{
            backgroundColor: AppColors.WHITE,
            paddingHorizontal: responsiveWidth(4),
            paddingVertical: responsiveHeight(2),
            borderRadius: 25,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View>
              <View style={{flexDirection: 'row', gap: 5}}>
                <Entypo
                  name={'location-pin'}
                  size={responsiveFontSize(2.5)}
                  color={AppColors.BTNCOLOURS}
                />
                <AppText
                  title={'Location (within 10 km)'}
                  textColor={AppColors.BLACK}
                  textSize={1.7}
                />
              </View>

              <LineBreak space={1} />

              <AppText
                title={'New York, United States'}
                textColor={AppColors.BLACK}
                textSize={1.7}
                textFontWeight
              />
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: AppColors.BTNCOLOURS,
                paddingHorizontal: responsiveWidth(3),
                paddingVertical: responsiveHeight(1),
                borderRadius: 20,
                flexDirection: 'row',
                gap: 8,
                alignItems: 'center',
              }}>
              <AntDesign
                name={'edit'}
                size={responsiveFontSize(1.3)}
                color={AppColors.WHITE}
              />
              <AppText
                title={'Change'}
                textColor={AppColors.WHITE}
                textSize={1.3}
                textFontWeight
              />
            </TouchableOpacity>
          </View>
        </View>

        <LineBreak space={5} />

        <Image source={AppImages.USERS_LOCATION} />

        <LineBreak space={4} />

        <RecommendedCard
          item={oneData}
          cardContainerWidth={true ? 90 : 43}
          cardWidth={true ? 15 : 19}
          titleFontSize={2}
          dateFontSize={1.5}
          locationFontSize={1.3}
          containerPaddingHorizontal={2}
          textContainerPaddingHorizontal={2}
          containerPaddingVertical={1}
          containerborderRadius={25}
          cardContainerBackgroundColor={AppColors.WHITE}
          bottomPadding={1}
          dateNumOfLines={1}
          dateMaxWidth={true ? 'auto' : 35}
          locationNumOfLines={1}
          locationMaxWidth={true ? 'auto' : 21}
          titleMaxWidth={35}
          titleNumOfLines={1}
          containerFlexDirection={true ? 'row' : 'column'}
          containerAlignItems={true ? 'center' : 'flex-start'}
          containerGap={true ? 5 : 0}
        />
      </ScrollView>

      {/* modal for enabling the location */}
      <CongratulationsModal
        visible={showLocationModal}
        imgSrc={AppImages.LOCATION_MARK}
        title={'Enable Location'}
        content={
          'To use this service, we need permission to access your location.'
        }
        buttons={
          <View>
            <AppButton
              title={'Enable Location'}
              textColor={AppColors.BLACK}
              textSize={2}
              btnWidth={80}
              handlePress={() => {
                setShowLocationModal(false);
              }}
            />
            <LineBreak space={2} />
            <AppButton
              title={'Cancel'}
              textColor={AppColors.BLACK}
              textSize={2}
              btnWidth={80}
              btnBackgroundColor={'#EEEDFE'}
              handlePress={() => setShowLocationModal(false)}
            />
          </View>
        }
      />
    </ImageBackground>
  );
};

export default Explore;
