import React from 'react';
import { View,StyleSheet } from 'react-native';

import Constants from "expo-constants";
import colors from '../config/colors';

function Screen({children, style}) {
     return (
     <View style={[styles.screen, style]}>{children}</View>
     );
}

const styles = StyleSheet.create({
     screen: {
          marginTop: 0,
          flex: 1,
          justifyContent: "center",
          alignItems: 'stretch',
          backgroundColor: colors.light,
          width: '100%'

     },
})

export default Screen;