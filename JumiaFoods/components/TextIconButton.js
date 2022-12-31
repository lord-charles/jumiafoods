import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

const TextIconButton = ({containerStyle, onPress, label, labelStyle, icon, iconStyle}) => {
  return (
    <View >
      <TouchableOpacity
        style={{...containerStyle}}
        className="flex-row ml-4 rounded-lg p-2"
        onPress={onPress}>
        <Text style={{...labelStyle}} className="relative top-[-10px] right-[-2px] font-semibold">{label}</Text>
        <Image source={icon} style={{...iconStyle}} className="w-[35px] h-[35px]"/>
      </TouchableOpacity>
    </View>
  );
}

export default TextIconButton;
