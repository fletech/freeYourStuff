import React from 'react';
import {Text, StyleSheet, View, } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import colors from '../config/colors'

function Register({props}) {
     return (
          <View style={styles.registerButton}>
               
               <View style={styles.registerIcon}><MaterialCommunityIcons name="account-card-details-outline" size={24} color="white" /></View>
               <Text style={styles.register}>register</Text>
          
          </View>
     );
}

export default Register;


const styles = StyleSheet.create({

     registerButton:{
          display: "flex",
          flexDirection: 'row',
          justifyContent: "center",
          alignItems: 'center',
          width: '80%',
          height: 50,
          backgroundColor: colors.secondaryBlur,
          borderRadius: 50,
          borderColor: colors.secondary,
          marginBottom: 40,
          shadowColor: 'white',
          shadowOffset: {width: 10, height: 10},
          shadowOpacity: 0.3,
          shadowRadius: 10,
          
     
     },
     register:{
          fontFamily: 'Optima',
          fontSize: 20,
          textAlign: 'center',
          color: colors.white,
          fontWeight: 'normal',
          marginTop: 0,
          alignContent: 'center'
     },

     registerIcon:{
          marginRight: 10,
          alignContent: "center"
     },
})