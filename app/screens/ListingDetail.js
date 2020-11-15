import React from 'react';
import {Text, StyleSheet, View, Image } from 'react-native';

import colors from '../config/colors'

import Apptext from '../components/Apptext'
import ListItem from '../components/ListItem'
import User from '../components/User'
import Card from '../components/Card'
import Heading from '../components/Heading'
import Screen from '../components/Heading'



function ListinDetail({title, subtitle}) {
     return (
     <Screen>
     <View style={styles.container}>
          
          <View style={styles.headerDetail}>
               <Image 
               style={styles.image}
               resizeMode='cover'
               source={require('../assets/bicicleta.jpg')}
               />
          </View>
          <View style={styles.detailsContainer}>
               <Apptext style={styles.title}>Veloretti bike</Apptext>
               <Apptext style={styles.subtitle}>Good conditions</Apptext>
               <Apptext style={styles.subtitle}>Østerport- KBH</Apptext>
          </View>

          <View style={styles.user}>
               <User
                    image={require('../assets/profile.jpg')}
                    name={'Facundo Garcia'}
                    title={'Hace 12 horas'}
                    subtitle={'🇩🇰 +45 23498195'}
          /> 
               
          </View>
          
          
     
     </View>
     </Screen>
     );
}

export default ListinDetail;


const styles = StyleSheet.create({
     contact:{
          fontSize: 14,
     },
     container:{
          flex: 1,
          justifyContent: 'flex-start',
          
          borderRadius: 20,
          
          backgroundColor: '#eaeaea',

     },
     detailsContainer:{
          margin: 20,
          marginBottom: 0,
     },
     detailsUser:{

     },
     headerDetail:{
          backgroundColor: colors.secondary
     },
     image:{
          marginTop: 10,
          width: '100%',
          height: 200,
          top: 0,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20
     },
     

     title:{
          marginBottom: 7,
          color: colors.primary
     },
     subtitle:{
          color: colors.black,
          fontSize: 14
     },
     user:{
          marginTop: 10,
     },
     
})