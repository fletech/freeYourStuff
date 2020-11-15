import React from 'react';
import {Text, StyleSheet, View, Image } from 'react-native';

import colors from '../config/colors'
import Apptext from './Apptext'


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
                    <Apptext style={styles.title}>{title}</Apptext>
                    <Apptext style={styles.subtitle}>{subtitle}</Apptext>
                    {availability && <Apptext style={styles.subtitle}>{availability}</Apptext>}

               </View>
               <View style={styles.detailsUser}>
                    <Apptext style={styles.location}>{location}</Apptext>
                    <Apptext style={styles.user}>{user}</Apptext>
                    
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