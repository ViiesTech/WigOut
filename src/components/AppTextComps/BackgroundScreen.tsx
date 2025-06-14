/* eslint-disable react-native/no-inline-styles */
import React, {ReactNode} from 'react';
import {ImageBackground} from 'react-native';
import AppImages from '../../assets/images/AppImages';

type BgProps = {
  children: ReactNode;
  stylesPorp?: any;
};

const BackgroundScreen = ({children, stylesPorp}: BgProps) => {
  return (
    <ImageBackground
      source={AppImages.BG}
      style={[{flex: 1, padding: 20}, stylesPorp]}>
      {children}
    </ImageBackground>
  );
};

export default BackgroundScreen;