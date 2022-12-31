import React from 'react';
import {View, Text, Image} from 'react-native';
import {COLORS, icons} from '../constants';

const RatingComponent = ({rating}) => {
  return (
    <View className="flex-row gap-x-2 items-center justify-center">
      <Image
        source={icons.star}
        style={{
          tintColor: rating > 1 ? COLORS.primary : COLORS.lightGray2,
        }}
        className="h-[25px] w-[25px]"
      />
      <Image
        source={icons.star}
        style={{
          tintColor: rating > 2 ? COLORS.primary : COLORS.lightGray2,
        }}
        className="h-[25px] w-[25px]"
      />
      <Image
        source={icons.star}
        style={{
          tintColor: rating > 3 ? COLORS.primary : COLORS.lightGray2,
        }}
        className="h-[25px] w-[25px]"
      />
      <Image
        source={icons.star}
        style={{
          tintColor: rating > 4 ? COLORS.primary : COLORS.lightOrange3,
        }}
        className="h-[25px] w-[25px]"
      />
      <Image
        source={icons.star}
        style={{
          tintColor: rating > 5 ? COLORS.primary : COLORS.lightOrange3,
        }}
        className="h-[25px] w-[25px]"
      />
    </View>
  );
};

export default RatingComponent;
