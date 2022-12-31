import React from 'react';
import {Text, Image, TouchableOpacity} from 'react-native';

const IconLabel = ({containerStyle, icon, iconStyle, label}) => {
  return (
    <TouchableOpacity style={{...containerStyle}} className="mt-7">
      <Image source={icon} style={{...iconStyle}} />
      <Text className="text-black">{label}</Text>
    </TouchableOpacity>
  );
};

export default IconLabel;
