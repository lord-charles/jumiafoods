import React from 'react';
import {View, Text, Image} from 'react-native';
import {Stepper, CartButton, HeaderDetails, IconButton} from '../../components';
import {COLORS, dummyData, icons} from '../../constants';
import {SwipeListView} from 'react-native-swipe-list-view';

const MyCart = ({navigation}) => {
  const [cartlist, setCartlist] = React.useState(dummyData.myCart);
  function updQtyHandler(newQty, id) {
    const newCartList = cartlist.map(cl => {
      cl.id === id ? {...cl, qty: newQty} : cl;
    });
    setCartlist(newCartList);
  }

  function renderCartList() {
    console.log(cartlist.map(item => item.id));
    return (
      <SwipeListView
        data={cartlist}
        keys={cartlist.map(item => item.id)}
        disableRightSwipe={true}
        rightOpenValue={-75}
        renderItem={(data, rowMap) => (
          <View className="mt-1 bg-gray-200 mx-1 rounded-lg h-[90px] items-center">
            <View className="flex-row w-[95vw] items-center justify-between">
              <Image
                source={data.item?.image}
                resizeMode="contain"
                className="w-[25%] h-[90px] relative top-3"
              />
              <View>
                <Text className="text-black text-[18px]">
                  {data.item?.name}
                </Text>
                <Text className="text-[15px] italic text-orange-500">
                  ${data.item?.price}
                </Text>
              </View>

              <View className="mt-6 mr-6">
                <Stepper
                  value={1}
                  onAdd={() =>
                    updQtyHandler(
                      1 + 1,
                      cartlist.map(item => item.id),
                    )
                  }
                  onMinus={() => {
                    if (data.item?.qty > 1) {
                      updQtyHandler(data.item?.qty - 1, data.item?.id);
                    }
                  }}
                  containerStyle={{backgroundColor: COLORS.white}}
                />
              </View>
            </View>
          </View>
        )}
      />
    );
  }
  return (
    <View
      style={{
        flex: 1,
      }}>
      <HeaderDetails
        title="My Cart"
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
      <View className="">{renderCartList()}</View>
    </View>
  );
};

export default MyCart;
