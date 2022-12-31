import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

const HorizontalFoodCard = ({item, icons, onPress}) => {
  return (
    <TouchableOpacity className="flex-row justify-between" onPress={onPress}>
      <View className="relative top-3 flex-row">
        <Image source={item.image} className="h-[100px] w-[100px] " />
        {/* price name & description */}
        <View className="justify-center">
          <Text className="font-bold text-black text-md">{item.name}</Text>
          <Text className="text-xs text-black">{item.description}</Text>
          <Text className="font-bold text-black text-lg">${item.price}</Text>
        </View>
      </View>

      <View className="flex-row mt-5">
        <Image source={icons.calories} className="h-[30px] w-[30px]" />
        <Text className="text-black relative top-1">
          {item.calories} calories
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default HorizontalFoodCard;
