import React from 'react';
import {Text, StyleSheet, Platform} from 'react-native';

import colors from '../config/colors'

function Heading({children, style}) {
     return (

     <Text style={[styles.heading, style]}>{children}</Text>

     );
}

export default Heading;


const styles = StyleSheet.create({
     heading:{
          fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Optima',
          fontSize: 24,
     },
})