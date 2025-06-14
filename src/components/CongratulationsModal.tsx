import React from 'react';
import {View, StyleSheet, Modal, Image, ActivityIndicator} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from '../utils/Responsive_Dimensions';
import AppText from './AppTextComps/AppText';
import AppColors from '../utils/AppColors';

type Props = {
  visible?: any,
  imgSrc?: any,
  title?: any,
  content?: any,
  buttons?: any,
}

const CongratulationsModal = ({visible, imgSrc, content, buttons, title}: Props) => {
  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Image
            source={imgSrc}
            style={{width: responsiveWidth(50), height: responsiveHeight(15)}}
            resizeMode="contain"
          />

          <AppText
            title={title ? title : 'Congratulations'}
            textColor={AppColors.THEME_COLOR}
            textSize={2.5}
            textFontWeight
          />

          <AppText
            title={ content ? content :
              'Your account is ready to use. You will be redirected to the Home page in a few seconds..'
            }
            textColor={AppColors.BLACK}
            textSize={1.7}
            textAlignment={'center'}
            textwidth={60}
            lineHeight={2.5}
          />

          {!buttons && <ActivityIndicator size={'large'} color={AppColors.THEME_COLOR} />}

          {buttons && buttons}
        </View>
      </View>
    </Modal>
  );
};

export default CongratulationsModal;

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: responsiveWidth(90),
    backgroundColor: '#fff',
    borderRadius: 30,
    alignItems: 'center',
    paddingVertical: responsiveHeight(4),
    gap: 15,
  },
  closeButton: {
    backgroundColor: '#2196F3',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  closeText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
