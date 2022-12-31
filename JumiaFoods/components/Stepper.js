import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {COLORS, icons} from '../constants';

const Stepper = ({onMinus, onAdd, value, containerStyle}) => {
  return (
    <View>
      <View
        className="flex-row gap-x-4 py-3 px-3  w-[135px] rounded-lg relative top-[-10px] left-[28px] items-center"
        style={{...containerStyle}}>
        <TouchableOpacity onPress={onMinus}>
          <Image
            source={icons.minus}
            className="w-[22px] h-[25px] ml-[-9px]"
            style={{tintColor: value > 1 ? COLORS.primary : null}}
          />
        </TouchableOpacity>
        <Text className="text-black text-[24px] font-bold">{value}</Text>
        <TouchableOpacity onPress={onAdd}>
          <Image source={icons.plus} className="w-[30px] h-[30px] mr-1" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Stepper;
