import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {icons, COLORS} from '../../constants';
import {AuthLayout} from '../index';
import {FormInput} from '../../components';
import {utils} from '../../utils';

const ForgotPassword = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  const [emailError, setEmailError] = React.useState('');
  function isEnableSignIn() {
    return email != '' && emailError == '';
  }

  return (
    <View>
      <AuthLayout
        title="Password Recovery"
        subtitle="Please enter your email address to recover your password">
        <View className="mt-5 mx-2 h-[76vh]">
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
          <View
            className="relative top-[460px] rounded-lg"
            style={{
              backgroundColor: isEnableSignIn()
                ? COLORS.primary
                : COLORS.lightOrange2,
            }}>
            <TouchableOpacity
              className="p-4 items-center justify-center"
              onPress={() => navigation.replace('SignIn')}
              disabled={isEnableSignIn() ? false : true}>
              <Text className="text-black text-[18px] font-bold">
                Send Email
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </AuthLayout>
    </View>
  );
};

export default ForgotPassword;
