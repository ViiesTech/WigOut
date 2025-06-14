/* eslint-disable jsx-quotes */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, Modal} from 'react-native';
import AppButton from './AppButton';
import AppColors from '../utils/AppColors';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../utils/Responsive_Dimensions';
import AppText from './AppTextComps/AppText';
import LineBreak from './LineBreak';
import {oneData} from '../utils/LocalData';
import RecommendedCard from './RecommendedCard';

type FavModalProp = {
  visible?: any;
  handleRemoveOnPress?: any;
  handleCancelOnPress?: any;
};

const FavModal = ({
  visible,
  handleRemoveOnPress,
  handleCancelOnPress,
}: FavModalProp) => {
  return (
    <Modal visible={visible} transparent={true} animationType="slide">
      <View style={styles.container}>
        <View style={styles.modal}>
          <View>
            <LineBreak space={0.7} />

            <View
              style={{
                backgroundColor: AppColors.LIGHTGRAY,
                borderRadius: 100,
                height: responsiveHeight(0.5),
                width: responsiveWidth(10),
                alignSelf: 'center',
              }}
            />
            <LineBreak space={3} />
            <View style={{gap: 20}}>
              <AppText
                title={'Remove from Favorites?'}
                textSize={2.5}
                textColor={AppColors.WHITE}
                textAlignment={'center'}
                textFontWeight
              />
              <View
                style={{
                  borderTopWidth: 1,
                  borderTopColor: AppColors.WHITE,
                }}>
                <LineBreak space={2} />
                <RecommendedCard
                  item={oneData}
                  cardContainerWidth={90}
                  cardWidth={15}
                  titleFontSize={2}
                  dateFontSize={1.5}
                  locationFontSize={1.3}
                  containerPaddingHorizontal={2}
                  textContainerPaddingHorizontal={2}
                  containerPaddingVertical={1}
                  containerborderRadius={25}
                  bottomPadding={1}
                  dateNumOfLines={1}
                  dateMaxWidth={'auto'}
                  locationNumOfLines={1}
                  locationMaxWidth={'auto'}
                  titleMaxWidth={35}
                  titleNumOfLines={1}
                  containerFlexDirection={'row'}
                  containerAlignItems={'center'}
                  containerGap={5}
                  isShowFavIcon={true}
                />
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <AppButton
                  title={'Cancel'}
                  textColor={AppColors.BLACK}
                  textSize={2}
                  handlePress={handleCancelOnPress}
                  btnWidth={43}
                  btnPadding={15}
                  btnBackgroundColor={AppColors.WHITE}
                />
                <AppButton
                  title={'Yes, Remove'}
                  textColor={AppColors.BLACK}
                  textSize={2}
                  handlePress={handleRemoveOnPress}
                  btnWidth={43}
                  btnPadding={15}
                />
              </View>
              <LineBreak space={1} />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modal: {
    backgroundColor: '#474747',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    height: responsiveHeight(41),
    width: responsiveWidth(100),
    paddingHorizontal: responsiveWidth(5),
  },
  labelContainer: {
    position: 'absolute',
    bottom: 0,
    left: responsiveWidth(-5),
    alignItems: 'center',
  },
  labelText: {
    backgroundColor: AppColors.THEME_COLOR,
    color: AppColors.WHITE,
    paddingHorizontal: 5,
    paddingVertical: 2,
    fontSize: responsiveFontSize(1.3),
    borderRadius: 5,
  },
});

export default FavModal;
