import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import { icons, images } from '../../constants';

const AuthLayout = ({title, subtitle, children, titleContainerStyle}) => {
  return (
    <View>
      <KeyboardAwareScrollView>
        {/* App icon */}
        <View className="items-center">
          <Image
            source={images.logo_02}
            resizeMode="center"
            className="h-[100px] w-[170px]"
          />
        </View>
        {/* title & subtitle & children */}
        <View style={{...titleContainerStyle}} className="items-center">
          <Text className="font-bold text-black text-[24px]">{title}</Text>
          <Text className="font-bold text-black text-center text-[15px]">{subtitle}</Text>
        </View>
        {/* content/children */}
        <View className="">{children}</View>

       
      </KeyboardAwareScrollView>
    </View>
  );
};

export default AuthLayout;
