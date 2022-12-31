import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/Header';
import {Home} from '../screens/index';
import {COLORS} from '../constants/index';

const MainLayout = ({navigation}) => {
  // const drawerProgress = useDrawerProgress();
  return (
    <View>
      <Header navigation={navigation} />

      <Home navigation={navigation} />
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 0, y: 4}}
        colors={[COLORS.transparent, COLORS.darkGray2]}
        style={{
          position: 'absolute',
          top: 715,
          width: '90%',
          left: 19,
          right: 0,
          height: 40,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
        }}
      />
    </View>
  );
};

export default MainLayout;
