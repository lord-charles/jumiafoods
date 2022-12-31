import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const TextTags = ({containerStyle, onPress, label, labelStyle}) => {
  return (
    <View>
      <TouchableOpacity
        style={{...containerStyle}}
        className="flex-row ml-4 rounded-lg p-3 mt-2"
        onPress={onPress}>
        <Text
          style={{...labelStyle}}
          className="relative top-[-10px] right-[-2px] font-bold text-center mt-3">
          {label}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TextTags;
