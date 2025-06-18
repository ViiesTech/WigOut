import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import AppText from './AppTextComps/AppText'; // adjust the path if needed
import  AppColors from '../utils/AppColors'; // adjust as needed

const SeeMoreText = ({ text, textColor = AppColors.WHITE, textSize = 1.8,lineHeight, numberOfLines = 2 }: any) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => setExpanded(prev => !prev);

  const displayText = expanded ? text : text?.slice(0, 200) + (text?.length > 200 ? '...' : '');

  return (
    <View>
      <AppText
        title={displayText}
        textColor={textColor}
        textSize={textSize}
        lineHeight={lineHeight}
      />
      {text?.length > 200 && (
        <TouchableOpacity onPress={toggleExpanded}>
          <Text style={{ color: AppColors.BTNCOLOURS}}>
            {expanded ? 'Read less' : 'Read more'}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SeeMoreText;
