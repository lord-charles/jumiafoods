import React from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import {COLORS, SIZES, dummyData, images, icons} from '../../constants';
import {
  HeaderDetails,
  IconButton,
  CartButton,
  IconLabel,
  TextButton,
  CustomLineDivider,
  RatingComponent,
  Stepper,
} from '../../components';

const FoodDetail = ({navigation, route}) => {
  const details = route.params;
  const [selectedSize, setSelectedSize] = React.useState('1');
  const [food, setFood] = React.useState(details);
  const [qty, setQty] = React.useState(1);
  function renderHeader() {
    return (
      <HeaderDetails
        title="Details"
        containerStyle={{height: 50, marginHorizontal: 8, marginTop: 20}}
        titleStyle={{
          marginTop: 10,
          fontWeight: 'bold',
          color: 'black',
          fontSize: 20,
        }}
        leftComponent={
          <IconButton
            icon={icons.back}
            containerStyle={{
              height: 37,
              width: 37,
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 1,
              borderRadius: 8,
              borderColor: COLORS.gray2,
              backgroundColor: COLORS.lightOrange2,
            }}
            iconStyle={{width: 25, height: 25, tintColor: COLORS.orange}}
            onPress={() => navigation.goBack()}
          />
        }
        rightComponent={
          <CartButton
            icon={icons.cart}
            iconStyle={{width: 25, height: 25, tintColor: COLORS.blue}}
            containerStyle={{
              height: 40,
              width: 40,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 8,
              backgroundColor: COLORS.lightOrange2,
            }}
            onPress={() => console.log('cart')}
            quantity={8}
          />
        }
      />
    );
  }
  function renderDetails() {
    return (
      <View>
        <View className="w-[98vw] mx-auto mt-3">
          <View className=" w-[98vw] h-[180px] bg-gray-200 rounded-lg ">
            <View className="flex-row justify-between w-[98vw] mt-1 ml-[-5px]">
              {/* calories */}
              <View className="flex-row">
                <Image source={icons.calories} className="w-[50px] h-[50px]" />
                <Text className="text-black mt-3">78 calories</Text>
              </View>
              {/* love */}
              <View>
                <Image
                  source={icons.love}
                  className="h-[30px] w-[30px]"
                  style={{
                    tintColor: food.isFavourite ? COLORS.red : COLORS.gray2,
                  }}
                />
              </View>
            </View>
            <View className="w-[98vw] mt-[-10px]">
              <Image
                source={food.image}
                className="w-[100%] h-[180px] "
                resizeMode="contain"
              />
            </View>
          </View>

          {/* fooddescription */}
          <View className="w-[98vw] mt-8">
            <Text className="text-black font-bold text-[25px]">
              {food.name}
            </Text>
            <Text className="text-black text mx-1 mt-2">
              {food.description2}
            </Text>
          </View>

          {/* rating & shipping & derivery */}
          <View className="flex-row justify-between mx-2">
            {/* rating */}
            <IconLabel
              label="4.5"
              icon={icons.star}
              iconStyle={{
                tintColor: COLORS.white,
                width: 20,
                height: 20,
                marginRight: 5,
              }}
              containerStyle={{
                flexDirection: 'row',
                backgroundColor: COLORS.orange,
                borderRadius: 8,
                padding: 8,
                width: 70,
              }}
            />
            {/* time */}
            <IconLabel
              label="30 min"
              icon={icons.clock}
              iconStyle={{
                tintColor: COLORS.black,
                width: 20,
                height: 20,
                marginRight: 5,
              }}
              containerStyle={{
                flexDirection: 'row',
                backgroundColor: COLORS.gray3,
                borderRadius: 8,
                padding: 8,
                width: 90,
              }}
            />
            {/* derivery */}
            <IconLabel
              label="Free derivery"
              icon={icons.dollar}
              iconStyle={{
                tintColor: COLORS.black,
                width: 20,
                height: 20,
                marginRight: 5,
              }}
              containerStyle={{
                flexDirection: 'row',
                backgroundColor: COLORS.lightOrange3,
                borderRadius: 8,
                padding: 8,
                width: 120,
              }}
            />
          </View>
          {/* sizes */}
          <View className="mt-10 mx-2 flex-row gap-x-4">
            <Text className="text-black font-bold text-[22px] relative left-8 top-0 rounded-md border-green-300 border h-[40px] p-2  text-center ">
              Sizes
            </Text>
            <View className="relative left-[50px] flex-row">
              {dummyData.sizes.map((item, index) => (
                <TextButton
                  label={item.label}
                  key={item.id}
                  buttonContainerStyle={{
                    padding: 13,
                    marginHorizontal: 10,
                    borderRadius: 8,
                    backgroundColor:
                      selectedSize == item.id ? COLORS.primary : COLORS.null,
                    borderColor:
                      selectedSize == item.id
                        ? COLORS.primary
                        : COLORS.lightOrange,
                    borderWidth: 1,
                  }}
                  labelStyle={{
                    color:
                      selectedSize == item.id ? COLORS.white : COLORS.black,
                    fontSize: selectedSize == item.id ? 16 : 13,
                    fontWeight: selectedSize == item.id ? '900' : '400',
                  }}
                  onPress={() => setSelectedSize(item.id)}
                />
              ))}
            </View>
          </View>
          {/* details profile */}
          <View className="mt-5">
            <CustomLineDivider className="mt-3" />
            <View className="mt-5 flex-row justify-between w-screen items-center px-4 ">
              <View className="flex-row gap-x-2 items-center">
                <Image
                  source={dummyData.myProfile.profile_image}
                  className="w-[50px] h-[50px] rounded-lg"
                  resizeMode="contain"
                />
                <View>
                  <Text className="text-black ">
                    {dummyData.myProfile.name}
                  </Text>
                  <Text className="text-black ">1.5 km from you</Text>
                </View>
              </View>
              <View>
                <RatingComponent rating={4} />
              </View>
            </View>
            <CustomLineDivider />
          </View>
        </View>
      </View>
    );
  }
  function renderFooter() {
    return (
      <View className="flex-row justify-between gap-x-1">
        <Stepper
          value={qty}
          onAdd={() => setQty(qty + 1)}
          onMinus={() => {
            if (qty > 1) {
              setQty(qty - 1);
            }
          }}
        />
        <TouchableOpacity
          className="flex-row gap-x-6 bg-orange-500 rounded-lg items-center px-4 relative top-[-10px] right-[11px]"
          onPress={() => navigation.navigate('MyCart')}>
          <Text className="text-white text-[25px]">Buy Now</Text>
          <Text className="text-black text-[18px] italic">
            ${(details.price * qty).toFixed(2)}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View
      style={{
        flex: 1,
      }}>
      {/* Header */}
      {renderHeader()}
      {/* Body */}
      <ScrollView>
        {/* FoodDetails */}
        {renderDetails()}
        {/* resturant  */}
      </ScrollView>
      {/* Footer */}
      {renderFooter()}
    </View>
  );
};

export default FoodDetail;
