import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {COLORS, FONTS} from '../constants';

const TextButton = ({label, labelStyle, buttonContainerStyle, onPress}) => {
  return (
    <TouchableOpacity
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.primary,
        ...buttonContainerStyle,
      }}
      onPress={onPress}>
      <Text className="text-black font-semibold" style={{...labelStyle}}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default TextButton;
