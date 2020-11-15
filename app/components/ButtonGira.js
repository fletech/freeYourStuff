import React from 'react';
import {Text, StyleSheet, View, Image, TouchableHighlight } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import colors from '../config/colors'
import Apptext from './Apptext'
import Icon from './Icon'


function ButtonGira({
     title,
     underlayColor= 'rgba(0,0,0,0.8)', 
     onPress, 
     width,
     color,
     iconName,
     colorIcon


}) {
     return (
     
          <TouchableHighlight
               underlayColor={underlayColor}
               onPress={onPress}
               name={title}
               width={width}
               color={color}
               iconName={iconName}
               colorIcon={colorIcon}
               style={{
                    
                    marginVertical: 10,
                    justifyContent: "center",
                    alignItems: 'center'
               }}
               >
               
               <View style={{
                    width,
                    backgroundColor: color,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    height: 50,
                    padding: 10,
                    opacity: 0.7


               }}>
                    <Icon 
                    name={iconName}
                    backgroundColor= {colorIcon}
                    
                    />
                    <Apptext style={styles.title}>{title}</Apptext>
               </View>
          </TouchableHighlight>

     );
}



const styles = StyleSheet.create({
     contact:{
          fontSize: 14,
          justifyContent: "flex-start"
         
     },

     container:{
          flexDirection: 'row',
          flex: 1,
          marginTop: 10,
          alignItems: "center",
          paddingBottom: 0,
          paddingLeft: 5,
          width: '100%', 
          height: 80, 
     },
     title: {
          marginLeft: 0,
          color: 'white',
     }

     
     
})


export default ButtonGira;