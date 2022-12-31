import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CustomDrawer from './navigation/CustomDrawer';
import {
  OnBoarding,
  SignIn,
  ForgotPassword,
  SignUp,
  Otp,
  FoodDetail,
  MyCart,
} from './screens';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="onBoardingScreen"
          component={OnBoarding}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MyCart"
          component={MyCart}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="FoodDetail"
          component={FoodDetail}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Otp"
          component={Otp}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Home"
          component={CustomDrawer}
          options={{headerShown: false}}
        />
        <Stack.Screen name="SignIn" component={SignIn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
