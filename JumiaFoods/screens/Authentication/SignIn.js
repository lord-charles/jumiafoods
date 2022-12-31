import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {AuthLayout, SignUp} from '../index';
import {FormInput, CustomSwitch, TextButton} from '../../components';
import {COLORS, icons} from '../../constants';
import {utils} from '../../utils';
import axios from 'axios';

const SignIn = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [showPassword, setShowPassword] = React.useState('');
  const [emailError, setEmailError] = React.useState('');
  const [saveMe, setSaveMe] = React.useState(false);
  function isEnableSignIn() {
    return email != '' && password != '' && emailError == '';
  }

  //fetch api data
  // const getData = axios.post(`${baseUrl}users/login`);
  // React.useEffect(() => {}, []);
  return (
    <View className=" bg-blue-400 h-screen">
      <AuthLayout
        title="Let's Sign You In"
        subtitle="Welcome back, you've been missed">
        <View className="mt-7 mx-2 h-[79vh]">
          {/* form inputs  */}
          <View>
            <FormInput
              label="Email"
              keyboardType="email-address"
              autoCompleteType="email"
              onChange={value => {
                //validate email
                utils.validateEmail(value, setEmailError);
                setEmail(value);
              }}
              errorMsg={emailError}
              appendComponent={
                <View>
                  <Image
                    source={
                      email == '' || (email != '' && emailError == '')
                        ? icons.correct
                        : icons.cross
                    }
                    style={{
                      width: 20,
                      height: 20,
                      tintColor:
                        email == '' || (email != '' && emailError == '')
                          ? 'green'
                          : 'red',
                      position: 'relative',
                      top: 13,
                      right: -28,
                    }}
                  />
                </View>
              }
            />
            <FormInput
              label="Password"
              secureTextEntry={!showPassword}
              autoCompleteType="password"
              onChange={value => {
                setPassword(value);
              }}
              appendComponent={
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}>
                  <Image
                    source={showPassword ? icons.eye_close : icons.eye}
                    style={{
                      width: 20,
                      height: 20,
                      tintColor: 'green',
                      position: 'relative',
                      top: 13,
                      right: -28,
                    }}
                  />
                </TouchableOpacity>
              }
            />
          </View>

          {/* save me & forgot password   */}
          <View className="flex-row justify-between mt-2">
            <CustomSwitch value={saveMe} onChange={value => setSaveMe(value)} />
            <TouchableOpacity
              className="relative top-2"
              onPress={() => navigation.navigate('ForgotPassword')}>
              <Text className="text-black">Forgot Password?</Text>
            </TouchableOpacity>
          </View>
          {/* sign in  */}
          <View
            className="p-3 rounded-lg mt-6"
            style={{
              backgroundColor: isEnableSignIn()
                ? COLORS.primary
                : COLORS.lightOrange2,
            }}>
            <TouchableOpacity disabled={isEnableSignIn() ? false : true}>
              <Text className="text-white text-[20px] text-center">
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
          {/* sign up  */}
          <View className="flex-row gap-3 items-center justify-center mt-1">
            <Text className="text-black text-[16px]">
              Don't have an account?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate(SignUp)}>
              <Text className="text-orange-400 font-bold text-[17px]">
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>

          {/* footer facebook & google  */}
          <View className="flex-col gap-y-3 mx-auto relative top-[140px] h-[270px]">
            <TouchableOpacity
              className="flex-row gap-x-3 p-4 bg-blue-500 rounded-lg justify-center items-center w-[90vw]"
              onPress={() => navigation.replace('Home')}>
              <Image
                source={icons.fb}
                className=" h-[20px] w-[20px] rounded-md"
              />
              <Text className="text-[16px] text-white">
                Continue with facebook
              </Text>
            </TouchableOpacity>

            <TouchableOpacity className="flex-row gap-x-3 bg-gray-200 p-4 rounded-lg justify-center items-center w-[90vw]">
              <Image
                source={icons.google}
                className=" h-[20px] w-[20px] rounded-md"
              />
              <Text className="text-black text-[16px]">
                Continue with Google{' '}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </AuthLayout>
    </View>
  );
};

export default SignIn;
