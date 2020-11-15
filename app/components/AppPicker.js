import React from 'react';
import { StyleSheet, View, TextInput, Platform, Picker } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import Apptext from './Apptext'
import defStyles from '../config/defStyles'

import Screen from '../components/Screen';



function AppPicker({icon, placeholder}) {
     return (
          
               <View style={styles.container}>
               {icon && <MaterialCommunityIcons name={icon} color={defStyles.colors.secondaryBlur} size={16} style={styles.icon}/>}
               <Apptext style={styles.text}>{placeholder}</Apptext>
               <MaterialCommunityIcons name='chevron-down' color={defStyles.colors.secondaryBlur} size={16}/>
               
               </View>

          
     );
}
 
const styles = StyleSheet.create({
     container: {
          backgroundColor: defStyles.colors.white,
          alignItems: 'center',
          borderRadius: 25,
          flexDirection: 'row',
          width: '100%',
          padding: 15,
          paddingVertical: 10,
          marginVertical: 10,
          borderColor: defStyles.colors.secondaryBlur,
          borderWidth: 0.3
     },
     
     icon:{
          marginRight: 10,
     },
     text:{
          flex:1,
     },
     
})
export default AppPicker;