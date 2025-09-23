/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, ImageBackground, KeyboardAvoidingView} from 'react-native';
import AppHeader from '../../../components/AppHeader';
import AppColors from '../../../utils/AppColors';
import {responsiveHeight} from '../../../utils/Responsive_Dimensions';
import AppImages from '../../../assets/images/AppImages';
import LocationModal from '../../../components/LocationModal';
import {useCustomNavigation} from '../../../utils/Hooks';
import {useRoute} from '@react-navigation/native';
import {createProfile} from '../../../GlobalFunctions/auth';
import {ShowToast} from '../../../utils/api_content';

const SetLocation = () => {
  const {navigateToRoute} = useCustomNavigation();
  const [locationName, setLocationName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const data = useRoute()?.params?.data;

  const handleLocationContinue = async () => {
    if (!locationName) {
      return ShowToast('error', 'Location is required');
    }

    setIsLoading(true);
    const res = await createProfile({
      id: data?.userId,
      fullName: data?.fullName,
      nickName: data?.nickName,
      image: data?.image,
      number: data?.number,
      locationName: locationName,
      gender: data?.gender,
      date: data?.date,
    });

    if (res?.success) {
      ShowToast('success', 'Profile Created Successfully');
      navigateToRoute('Main');
    } else {
      ShowToast('error', res?.msg);
    }

    setIsLoading(false);
  };

  return (
    <KeyboardAvoidingView style={{flex: 1}} behavior="padding">
      <View style={{flex: 1}}>
        <View
          style={{
            backgroundColor: AppColors.WHITE,
            paddingBottom: responsiveHeight(4),
            paddingTop: responsiveHeight(2),
          }}>
          <AppHeader onBackPress heading={'Set Your Location'} />
        </View>

        <ImageBackground source={AppImages.LOCATION} style={{flex: 1}}>
          <View style={{flex: 1, justifyContent: 'flex-end'}}>
            <LocationModal
              value={locationName}
              onChangeText={text => setLocationName(text)}
              handlePress={() => handleLocationContinue()}
              loading={isLoading}
            />
          </View>
        </ImageBackground>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SetLocation;
