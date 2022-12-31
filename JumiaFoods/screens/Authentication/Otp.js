import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {AuthLayout} from '../index';
import {COLORS} from '../../constants';
import OTPInputView from '@twotalltotems/react-native-otp-input';


const Otp = ({navigation}) => {
  const [timer, setTimer] = React.useState(60);
  React.useEffect(() => {
    let interval = setInterval(() => {
      setTimer(prevTime => {
        if (prevTime > 0) {
          return prevTime - 1;
        } else {
          return prevTime;
        }
      });
    }, 1000);
      return () => clearInterval(interval);

  }, []);

  return (
    <View className="h-screen bg-blue-400">
      <AuthLayout
        title="OTP Authentication"
        subtitle="An authentication code has been sent to the charles256@gmail.com">
        <View className="mb-[420px]">
          <View className="relative mt-[100px] ml-[15px]">
            <OTPInputView
              pinCount={4}
              style={{
                width: '96%',
                height: 50,
                marginBottom: 20,
                colors: COLORS.black,
              }}
              codeInputFieldStyle={{
                width: 65,
                height: 65,
                color: 'black',
                borderRadius: 10,
                backgroundColor: COLORS.lightOrange2,
                fontWeights: 700,
                fontSize: 20,
              }}
              onCodeFilled={code => {
                code == 1500
                  ? navigation.replace('Home')
                  : console.log('try again');
              }}
            />
            <View className="flex-row gap-x-1 items-center justify-center mt-5">
              <Text className="text-black text-[15px]">
                Didn't receive code?
              </Text>
              <TouchableOpacity>
                <Text className="text-orange-500 font-bold text-[15px]">
                  Resend ({timer})
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View className="relative top-[420px] items-center">
            <Text className="text-black text-[15px]">
              By Signing up, you agree to our terms & conditions.
            </Text>
            <TouchableOpacity>
              <Text className="text-orange-500 font-bold text-[17px]">
                Terms and Conditions.
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </AuthLayout>
    </View>
  );
};

export default Otp;
