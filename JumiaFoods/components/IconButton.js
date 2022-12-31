import React from 'react';
import {Image, TouchableOpacity  } from 'react-native';

const IconButton = ({onPress, containerStyle, iconStyle, icon}) => {
  return (
    <TouchableOpacity
    style={{...containerStyle}}
    onPress={onPress}
    >
         <Image style={{width: 30, height:30, tintColor: "white", ...iconStyle}}
          source={icon}
         />
    </TouchableOpacity>
  );
}

export default IconButton;
