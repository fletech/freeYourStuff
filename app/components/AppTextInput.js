import React from 'react';
import { StyleSheet, View, TextInput, Platform } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


import defStyles from '../config/defStyles'

import Screen from '../components/Screen';



function AppTextInput({icon, ...otherProps}) {
     return (
          
               <View style={styles.container}>
               {icon && <MaterialCommunityIcons name={icon} color={defStyles.colors.secondaryBlur} size={16} style={styles.icon}/>}
               <TextInput style={defStyles.text}{...otherProps}/>
               
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
     
})
export default AppTextInput;