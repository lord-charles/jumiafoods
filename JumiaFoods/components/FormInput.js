import React from 'react';
import {View, Text, TextInput} from 'react-native';
import { COLORS } from '../constants';

const FormInput = ({
  containerStyle,
  label,
  placeholder,
  inputStyle,
  prependComponent,
  appendComponent,
  onChange,
  secureTextEntry,
  keyboardType = 'default',
  autoCompleteType = 'off',
  autoCapitalize = 'none',
  errorMsg = '',
}) => {
  return (
    <View style={{...containerStyle}} className="mt-5">
      {/* label & errorMsg */}
      <View className="relative top-0 flex-row justify-between mx-1 mb-3">
        <Text className="text-black font-bold text-[15px]">{label}</Text>
        <Text className="text-red-400 font-bold">{errorMsg}</Text>
      </View>
      {/* textinput */}
      <View className="flex-row bg-gray-200 rounded-lg p-1">
        {prependComponent}
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={COLORS.gray}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          autoCompleteType={autoCompleteType}
          // onChange={onChange}
          onChangeText={text => onChange(text)}
          className="w-[80vw] text-black font-bold text-[19px] bg-gray-200"
        />
        {appendComponent}
      </View>
    </View>
  );
};

export default FormInput;
