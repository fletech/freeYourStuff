import React from 'react';
import {Text, StyleSheet, View, Image } from 'react-native';

import colors from '../config/colors'
import AppText from './AppText'


function Card({title, subtitle,availability,image, location, user}) {
     return (
     <View style={styles.card}>
          {image && <Image 
          style={styles.image}
          resizeMode='cover'
          source={image}
          />}
          <View style={styles.description}>
               <View style={styles.detailsContainer}>
                    <AppText style={styles.title}>{title}</AppText>
                    <AppText style={styles.subtitle}>{subtitle}</AppText>
                    {availability && <AppText style={styles.subtitle}>{availability}</AppText>}

               </View>
               <View style={styles.detailsUser}>
                    <AppText style={styles.location}>{location}</AppText>
                    <AppText style={styles.user}>{user}</AppText>
                    
               </View>
               
          </View>
     </View>

     );
}

export default Card;


const styles = StyleSheet.create({
     card:{
          borderTopRightRadius: 30,
          borderRadius: 30,
          backgroundColor: colors.white,
          marginBottom: 18,
          height: 280,
          width: '100%',
          overflow: 'hidden',
          borderWidth: 1,
          borderColor: colors.secondaryBlur,
          
     },
     image:{
          width: '100%',
          height: 200,
     },

     description:{
          flexDirection: 'row',
          justifyContent: 'space-between',
          height: 80,
          padding: 15,
     },
     detailsContainer:{
          padding: 0,
          justifyContent: 'space-between',
     },
     title:{
          marginBottom: 0,
          color: colors.primary,
          fontWeight: 'bold'
     },
     subtitle:{
          color: colors.black,
          fontSize: 14
     },
     detailsUser:{
          padding: 0,
          justifyContent: 'flex-end',
     },
     user:{
          color: colors.black,
          fontSize: 14,
          textAlign: 'right'
     },
     location:{
          color: colors.black,
          fontSize: 14,
          textAlign: 'right'
     },

     
     
})