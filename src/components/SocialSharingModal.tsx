/* eslint-disable jsx-quotes */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  StyleSheet,
  Modal,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import AppColors from '../utils/AppColors';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../utils/Responsive_Dimensions';
import AppText from './AppTextComps/AppText';
import LineBreak from './LineBreak';
import SVGXml from './SVGXML';
import {AppIcons} from '../assets/icons';

const shareData = [
  {
    id: 1,
    name: 'WhatsApp',
    icon: () => <SVGXml icon={AppIcons.whatsApp} width={'70'} height={'70'} />,
  },
  {
    id: 2,
    name: 'Twitter',
    icon: () => <SVGXml icon={AppIcons.twitter} width={'70'} height={'70'} />,
  },
  {
    id: 3,
    name: 'Facebook',
    icon: () => <SVGXml icon={AppIcons.facebook} width={'70'} height={'70'} />,
  },
  {
    id: 4,
    name: 'Instagram',
    icon: () => <SVGXml icon={AppIcons.instagram} width={'70'} height={'70'} />,
  },
  {
    id: 5,
    name: 'Yahoo',
    icon: () => <SVGXml icon={AppIcons.yahoo} width={'70'} height={'70'} />,
  },
  {
    id: 6,
    name: 'Tiktok',
    icon: () => <SVGXml icon={AppIcons.tiktok} width={'70'} height={'70'} />,
  },
  {
    id: 7,
    name: 'Chat',
    icon: () => <SVGXml icon={AppIcons.chat} width={'70'} height={'70'} />,
  },
  {
    id: 8,
    name: 'WeChat',
    icon: () => <SVGXml icon={AppIcons.we_chat} width={'70'} height={'70'} />,
  },
];

const SocialSharingModal = ({visible, setIshowSharingModal}: any) => {
  return (
    <Modal visible={visible} transparent={true} animationType="slide">
      <View style={styles.container}>
        <View style={styles.modal}>
          <View>
            <LineBreak space={0.7} />

            <TouchableOpacity
              style={{
                backgroundColor: AppColors.LIGHTGRAY,
                borderRadius: 100,
                height: responsiveHeight(0.5),
                width: responsiveWidth(10),
                alignSelf: 'center',
              }}
              onPress={() => setIshowSharingModal(false)}
            />
            <LineBreak space={2} />
            <View style={{gap: 20}}>
              <AppText
                title={'Share'}
                textSize={2.5}
                textColor={AppColors.WHITE}
                textAlignment={'center'}
                textFontWeight
              />
              <View
                style={{
                  borderTopWidth: 1,
                  borderTopColor: AppColors.WHITE,
                  paddingVertical: responsiveHeight(2),
                }}>
                <LineBreak space={2} />

                <View>
                  <FlatList
                    data={shareData}
                    ItemSeparatorComponent={() => <LineBreak space={1.5} />}
                    contentContainerStyle={{
                      gap: 20,
                      flexDirection: 'row',
                      flexWrap: 'wrap',
                      justifyContent: 'center',
                    }}
                    renderItem={({item}) => {
                      return (
                        <TouchableOpacity onPress={() => setIshowSharingModal(false)}>
                          {item.icon()}
                          <LineBreak space={1} />
                          <AppText
                            title={item.name}
                            textSize={1.7}
                            textColor={AppColors.WHITE}
                            textAlignment={'center'}
                          />
                        </TouchableOpacity>
                      );
                    }}
                  />
                </View>
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
    height: responsiveHeight(45),
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

export default SocialSharingModal;
