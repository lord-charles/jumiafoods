import React from 'react';
import { View, Text } from 'react-native';

const HeaderDetails = ({rightComponent, leftComponent, title, titleStyle, containerStyle}) => {
  return (
    <View
    style={{
        ...containerStyle
    }}
    className="h-[60px] flex-row justify-between"
    >
        {leftComponent}
        <View>
            <Text style={{...titleStyle}}>
                {title}
            </Text>
        </View> 
        {rightComponent}
    </View>
  );
}

export default HeaderDetails;
