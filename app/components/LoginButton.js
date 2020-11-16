import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity, } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import colors from '../config/colors'
import defStyles from '../config/defStyles'
import Icon from './Icon'

function AppButton({title, onPress,icon,style}) {
     return (
          <TouchableOpacity style={[styles.loginButton, style]} onPress={onPress}>
               {icon && <MaterialCommunityIcons name={icon} color={defStyles.colors.white} size={20} style={styles.loginIcon}/>}
               <Text style={styles.text}>{title}</Text>
          
          </TouchableOpacity>
     );
}

export default AppButton;


const styles = StyleSheet.create({

     loginButton:{
          display: "flex",
          flexDirection: 'row',
          justifyContent: "center",
          alignItems: 'center',
          width: '90%',
          height: 45,
          backgroundColor: colors.primaryBlur,
          borderRadius: 50,
          borderColor: colors.primary,
          marginVertical: 10,
          shadowColor: defStyles.colors.black,
          shadowOffset: {width: 0, height: 10},
          shadowOpacity: 0.5,
          shadowRadius: 6,
     },
     text:{
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