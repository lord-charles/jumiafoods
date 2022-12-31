import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useEffect, useRef} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import Colors from '../constants/Colors';
import {
  CartTab,
  Favourite,
  MainLayout,
  Search,
  Notification,
  FoodDetail,
} from '../screens/index';
import * as Animatable from 'react-native-animatable';
import {icons} from '../constants/index';

const TabArr = [
  {
    route: 'Home',
    label: 'Home',
    type: icons.home,
    icon: 'home',
    component: MainLayout,
  },
  {
    route: 'Search',
    label: 'Search',
    type: icons.search,
    icon: 'search',
    component: Search,
  },
  {
    route: 'cart',
    label: 'Cart',
    type: icons.cart,
    icon: 'plus-square',
    component: CartTab,
  },

  {
    route: 'Favourite',
    label: 'Favourite',
    type: icons.favourite,
    icon: 'heart',
    component: Favourite,
  },
  {
    route: 'Notification',
    label: 'Notifications',
    type: icons.notification,
    icon: 'user-circle-o',
    component: Notification,
  },
];

const Tab = createBottomTabNavigator();

const animate1 = {
  0: {scale: 0.5, translateY: 7},
  0.92: {translateY: -34},
  1: {scale: 1.2, translateY: -24},
};
const animate2 = {
  0: {scale: 1.2, translateY: -24},
  1: {scale: 1, translateY: 7},
};

const circle1 = {
  0: {scale: 0},
  0.3: {scale: 0.9},
  0.5: {scale: 0.2},
  0.8: {scale: 0.7},
  1: {scale: 1},
};
const circle2 = {0: {scale: 1}, 1: {scale: 0}};

const TabButton = props => {
  const {item, name, onPress, accessibilityState} = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef();
  const circleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (focused) {
      viewRef.current.animate(animate1);
      circleRef.current.animate(circle1);
      textRef.current.transitionTo({scale: 1});
    } else {
      viewRef.current.animate(animate2);
      circleRef.current.animate(circle2);
      textRef.current.transitionTo({scale: 0});
    }
  }, [focused]);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={styles.container}>
      <Animatable.View ref={viewRef} duration={500} style={styles.container}>
        <View style={styles.btn}>
          <Animatable.View ref={circleRef} style={styles.circle} />
          <Image
            source={item}
            className="h-[25px] w-[25px]"
            style={{tintColor: 'green'}}
          />
        </View>
        <Animatable.Text
          ref={textRef}
          style={styles.text}
          className="font-bold ">
          {item.label}
        </Animatable.Text>
      </Animatable.View>
    </TouchableOpacity>
  );
};

export default function AnimTab1() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
      }}>
      {TabArr.map((item, index) => {
        return (
          <Tab.Screen
            key={index}
            name={item.route}
            component={item.component}
            options={{
              tabBarShowLabel: false,
              tabBarButton: props => (
                <TabButton {...props} item={item.type} name={item.label} />
              ),
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBar: {
    height: 60,
    position: 'absolute',
    bottom: 0,
    right: 13,
    left: 13,
    borderRadius: 16,
  },
  btn: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 4,
    borderColor: Colors.white,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
    borderRadius: 30,
  },
  text: {
    fontSize: 11,
    textAlign: 'center',
    color: 'violet',
  },
});
