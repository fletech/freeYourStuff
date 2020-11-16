import React from 'react';
import {Text, StyleSheet, View, Image,  } from 'react-native';


import colors from '../config/colors'
import AppText from './AppText'


function User({title, subtitle,image, IconComponent, name, EditComponent,onPress, renderRightActions, style}) {
     return (
     
               <View style={[styles.container, style]}>

                    {IconComponent}
                    {image && 
                         <Image      
                         style={styles.image}     
                         source={image}/>
                    }
                    
                    <View style={styles.detailsUser}>

                         {name && <AppText style={[styles.contact, styles.name]}>{name}</AppText>}
                         {title && <AppText style={[styles.contact, styles.title]}>{title}</AppText>}
                         {subtitle && <AppText style={[styles.contact, styles.subtitle]}>{subtitle}</AppText>}
                    </View>
                         {EditComponent}

               </View>
         
     );
}



const styles = StyleSheet.create({
     contact:{
          fontSize: 14,
          
         
     },

     container:{
          alignItems: 'center',
          flexDirection: 'row',
          paddingBottom: 0,
          paddingLeft: 15,
          width: '100%', 
          height: 100, 
          marginVertical: 0,
     },
     
     detailsUser:{
          width: '100%',
          justifyContent:'center',
          marginLeft:10, 
          paddingBottom: 0,
          height: 80,
          
          
     },
     
     image:{
          marginBottom: 0,
          width: 80,
          height: 80,
          borderRadius: 40,
          marginHorizontal: 10,
          marginLeft: 0,
          
          
     },
     title:{
          fontSize: 16,
          color: colors.black
     },

     name:{
          fontSize: 16,
          fontWeight: 'bold',
          color: colors.black
     },

     
     
})


export default User;