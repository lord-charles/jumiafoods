import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {AuthLayout, SignIn, Otp} from '../index';
import {FormInput} from '../../components';
import {COLORS, icons} from '../../constants';
import {utils} from '../../utils';

const SignUp = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  const [userName, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [showPassword, setShowPassword] = React.useState('');
  const [emailError, setEmailError] = React.useState('');
  const [userNameError, setUserNameError] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');
  function isEnableSignUp() {
    return email != '' && password != '' && passwordError == '' && userName != '' && userNameError  == '' && emailError == '';
  }

  return (
    <View className="bg-blue-400">
      <AuthLayout
        title="Getting started..."
        subtitle="Create an account to continue"
        >
        {/* form inputs  */}
        <View className="mx-2">
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
            label="Username"
            keyboardType="email-address"
            autoCompleteType="email"
            onChange={value => {
              setUserName(value);
            }}
            errorMsg={userNameError}
            appendComponent={
              <View>
                <Image
                  source={
                    userName == '' || (userName != '' && userNameError == '')
                      ? icons.correct
                      : icons.cross
                  }
                  style={{
                    width: 20,
                    height: 20,
                    tintColor:
                      userName == '' || (userName != '' && userNameError == '')
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
              utils.validatePassword(value, setPasswordError);
              setPassword(value);
            }}
            errorMsg={passwordError}
            appendComponent={
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
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

        {/* sign up  */}
        <View
          className="p-3 rounded-lg mt-6 mx-2"
          style={{
            backgroundColor: isEnableSignUp()
              ? COLORS.primary
              : COLORS.lightOrange2,
          }}>
          <TouchableOpacity
            disabled={isEnableSignUp() ? false : true}
            onPress={() => navigation.navigate(Otp)}>
            <Text className="text-white text-[20px] text-center">Sign Up</Text>
          </TouchableOpacity>
        </View>

        {/* sign up  */}
        <View className="flex-row gap-3 items-center justify-center mt-1">
          <Text className="text-black text-[16px]">
            Already have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate(SignIn)}>
            <Text className="text-orange-400 font-bold text-[17px]">
              Sign In
            </Text>
          </TouchableOpacity>
        </View>

        {/* footer facebook & google  */}
        <View className="flex-col gap-y-3 mx-auto relative top-[100px] h-[270px]">
          <TouchableOpacity className="flex-row gap-x-3 p-4 bg-blue-500 rounded-lg justify-center items-center w-[90vw]">
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
      </AuthLayout>
    </View>
  );
};

export default SignUp;
