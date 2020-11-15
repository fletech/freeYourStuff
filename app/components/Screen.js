import React from 'react';
import { SafeAreaView,StyleSheet } from 'react-native';

import Constants from "expo-constants";
import colors from '../config/colors';

function Screen({children, style}) {
     return (
     <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>
     );
}

const styles = StyleSheet.create({
     screen: {
          paddingTop: Constants.statusBarHeight,
          flex: 1,
          justifyContent: "center",
          alignItems: 'stretch',
          backgroundColor: colors.light,
          width: '100%'

     },
})

export default Screen;