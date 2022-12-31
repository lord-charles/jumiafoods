import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

const CartButton = ({onPress, containerStyle, iconStyle, icon, quantity}) => {
  return (
    <TouchableOpacity onPress={onPress} style={{...containerStyle}}>
      <Image source={icon} style={{...iconStyle}} />
      <View className="absolute top-[-8px] right-[2px] bg-orange-500 rounded-full px-[4px]">
        <Text className="text-black text-xs">{quantity}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CartButton;
