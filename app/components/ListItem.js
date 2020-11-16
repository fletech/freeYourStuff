import React from 'react';
import {Text, StyleSheet, View, Image, TouchableHighlight } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import colors from '../config/colors'
import AppText from './AppText'


function ListItem({
     title , 
     subtitle,
     image,
     name, 
     onPress, 
     renderRightActions}) {
     return (
     <Swipeable
          renderRightActions={renderRightActions}>
          <TouchableHighlight
               underlayColor={'#f3f3f3'}
               onPress={onPress}>

               <View style={styles.container}>
                    {Image && <Image      
                         style={styles.image}     
                         source={image}/>}
                    <View style={styles.detailsUser}>
                         <AppText style={[styles.contact, styles.title]}>{title}</AppText>
                         <AppText style={[styles.contact, styles.subtitle]}>{subtitle}</AppText>
                    </View>
               </View>
          </TouchableHighlight>
     </Swipeable>
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
     
     detailsUser:{
          justifyContent: 'center',
          alignItems: 'stretch',
          marginLeft:5, 
          paddingBottom: 10,
          height: '100%', 
          flex: 1,
          borderBottomColor: colors.grey,
          borderBottomWidth: 1,
     },
     
     image:{
          marginBottom: 10,
          width: 70,
          height: 70,
          borderRadius: 40,
          marginHorizontal: 10,
          
          
     },
     title:{
          fontSize: 16,
          fontWeight: 'bold',
     },

     
     
})


export default ListItem;