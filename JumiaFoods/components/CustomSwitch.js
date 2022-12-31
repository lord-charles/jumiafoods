import React from 'react';
import {View, Text, TouchableWithoutFeedback, StyleSheet} from 'react-native';
import { COLORS, FONTS } from '../constants';

const CustomSwitch = ({value, onChange}) => {
  return (
   <TouchableWithoutFeedback onPress={()=> onChange(!value)}>
    <View style={{
        flexDirection: 'row',
        marginTop: 9
    }}>
        {/* switch  */}
        <View style={value? Styles.switchOnContainer : Styles.switchOffContainer}>
            <View style={{...Styles.dot, backgroundColor: value ? COLORS.white : COLORS.gray }}/>
        </View>
        {/* text  */}
        <Text style={{
            color: value ? COLORS.primary : COLORS.black,
            marginLeft: 5,
            ...FONTS.body4
        }}>
            SaveMe
        </Text>
    </View>
   </TouchableWithoutFeedback>
  )
};
const Styles = StyleSheet.create({
  switchOnContainer: {
    width: 40,
    height: 20,
    paddingRight: 2,
    justifyContent: 'center',
    alignItems: 'flex-end',
    borderRadius: 10,
    backgroundColor: COLORS.primary,
  },

  switchOffContainer: {
    width: 40,
    height: 20,
    paddingRight: 2,
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.gray,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
});
export default CustomSwitch;
