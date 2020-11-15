import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity, } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import colors from '../config/colors'

function Login({title, onPress,}) {
     return (
          <TouchableOpacity style={styles.loginButton} onPress={onPress}>
               
               <View style={styles.loginIcon}><MaterialCommunityIcons name="login" size={24} color="white" /></View>
               <Text style={styles.login}>{title}</Text>
          
          </TouchableOpacity>
     );
}

export default Login;


const styles = StyleSheet.create({

     loginButton:{
          display: "flex",
          flexDirection: 'row',
          justifyContent: "center",
          alignItems: 'center',
          width: '80%',
          height: 50,
          backgroundColor: colors.primaryBlur,
          borderRadius: 50,
          borderColor: colors.primary,
          marginBottom: 40,
          shadowColor: 'white',
          shadowOffset: {width: 10, height: 10},
          shadowOpacity: 0.3,
          shadowRadius: 10,
     },
     login:{
          fontFamily: 'Optima',
          fontSize: 20,
          textAlign: 'center',
          color: colors.white,
          fontWeight: 'normal',
          marginTop: 0,
          alignContent: 'center'
     },

     loginIcon:{
          marginRight: 10,
          alignContent: "center"
     },
})