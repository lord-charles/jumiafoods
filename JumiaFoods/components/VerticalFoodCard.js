import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {COLORS} from '../constants';

const VerticalFoodCard = ({icons, item, onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
      {/* top */}
      <View className="flex-row justify-between mt-2">
        <View className="flex-row">
          <Image source={icons.calories} className="w-[50px] h-[50px] " />
          <Text className="relative top-2.5 text-black">
            {item.calories} Calories
          </Text>
        </View>
        <Image
          source={icons.love}
          className="w-[30px] h-[30px] relative top-1 mr-3"
          style={{
            tintColor: item.isFavourite ? 'red' : 'gray',
          }}
        />
      </View>
      {/* middle */}
      <View className="items-center ">
        <Image source={item.image} className="w-[140px] h-[120px]" />
      </View>

      {/* footer */}
      <View className="relative top-[-25px] items-center">
        <Text className="text-lg font-bold  text-black">{item.name}</Text>
        <Text className="text-sm font-bold italic text-black">
          {item.description}
        </Text>
        <Text className="text-lg font-bold  text-black">${item.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default VerticalFoodCard;
