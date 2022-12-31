import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import MainLayout from '../screens/MainLayout';
import {COLORS, constants, icons, dummyData} from '../constants/index';
import AnimTab1 from './Tab';

const Drawer = createDrawerNavigator();
const CustomDrawerItems = ({label, icon, onPress}) => {
  return (
    <TouchableOpacity className="flex flex-row gap-3 mt-[17px]" onPress={onPress}>
      <Image
        source={icon}
        className="h-[25px] w-[25px]"
        style={{tintColor: COLORS.blue}}
      />
      <Text className="text-black font-semibold relative top-1">{label}</Text>
    </TouchableOpacity>
  );
};

const CustomDrawerContent = ({navigation}) => {
  return (
    <DrawerContentScrollView
      scrollEnabled={true}
      contentContainerStyle={{flex: 1}}>
      <View className="flex-1 pl-5">
        {/* close icon */}
        <View className="">
          <TouchableOpacity
            className=" p-1 border-2 border-orange-700 w-[27px] rounded-lg mb-2 items-center justify-center h-[27px]"
            onPress={() => navigation.closeDrawer()}>
            <Image source={icons.cross} className="h-[20px] w-[20px]" />
          </TouchableOpacity>
        </View>
        {/* Profile */}
        <TouchableOpacity className="flex flex-row gap-3">
          <Image
            source={dummyData.myProfile?.profile_image}
            className="w-[50px] h-[50px] rounded-md"
          />
          <View className="items-center justify-center">
            <Text className="font-bold text-black text-lg">
              {dummyData.myProfile?.name}
            </Text>
            <Text className="text-black font-semibold">View your profile</Text>
          </View>
        </TouchableOpacity>
        {/* drawer items */}
        <View className="ml-3">
          <CustomDrawerItems
            label={constants.screens.home}
            icon={icons.home}
            onPress={() => navigation.replace('SignIn')}
          />
          <CustomDrawerItems
            label={constants.screens.wallet}
            icon={icons.wallet}
            onPress={() => navigation.replace('SignIn')}
          />
          <CustomDrawerItems
            label={constants.screens.notification}
            icon={icons.notification}
            onPress={() => navigation.replace('SignIn')}
          />
          <CustomDrawerItems
            label={constants.screens.favourite}
            icon={icons.favourite}
            onPress={() => navigation.replace('SignIn')}
          />

          {/* linedivider */}
          <View className=" bg-white h-[1px] mt-4"></View>

          <CustomDrawerItems
            label="Track Your Order"
            icon={icons.location}
            onPress={() => navigation.replace('SignIn')}
          />
          <CustomDrawerItems label="Coupons" icon={icons.coupon} />
          <CustomDrawerItems
            label="Settings"
            icon={icons.setting}
            onPress={() => navigation.replace('SignIn')}
          />
          <CustomDrawerItems
            label="Track Your Order"
            icon={icons.location}
            onPress={() => navigation.replace('SignIn')}
          />
          <CustomDrawerItems
            label="Invite a Friend"
            icon={icons.profile}
            onPress={() => navigation.replace('SignIn')}
          />
          <CustomDrawerItems
            label="Help Center"
            icon={icons.help}
            onPress={() => navigation.replace('SignIn')}
          />
        </View>
        <View className="mt-[110px]">
          <CustomDrawerItems
            label="Logout"
            icon={icons.logout}
            onPress={() => navigation.replace('SignIn')}
          />
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

const CustomDrawer = () => {
  return (
    <View className="flex-1">
      <Drawer.Navigator
        screenOptions={{
          drawerStyle: {
            backgroundColor: COLORS.primary,
          },
          drawerType: 'slide',
          overlayColor: 'transparent',
          headerShown: false,
        }}
        sceneContainerStyle={{
          backgroundColor: 'transparent',
        }}
        drawerContent={props => {
          return <CustomDrawerContent navigation={props.navigation} />;
        }}>
        <Drawer.Screen name="tabs">
          {props => <AnimTab1 {...props} navigation={props.navigation} />}
        </Drawer.Screen>
        <Drawer.Screen name="MainLayout">
          {props => <MainLayout navigation={props.navigation} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </View>
  );
};

export default CustomDrawer;
