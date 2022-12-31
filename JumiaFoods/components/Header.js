import React from 'react';
import { View, Text, Image, SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
  COLORS,
  FONTS,
  SIZES,
  constants,
  icons,
  dummyData,
} from '../constants/index';
const Header = ({navigation}) => {
  return (
    <SafeAreaView>
      <View className="flex-row justify-between mx-4 mt-2">
        <TouchableOpacity className="rounded-lg p-2 border-2 border-gray-300" onPress={()=>navigation.openDrawer()}>
          <Image source={icons.menu} />
        </TouchableOpacity>
        <TouchableOpacity className="items-center">
            <Text className="font-bold text-lg text-black">Jumia-Foods</Text>
            <Text className="text-black font-bold italic ">By Charles</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={dummyData.myProfile?.profile_image} className="h-[35px] w-[35px] rounded-md" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default Header;
