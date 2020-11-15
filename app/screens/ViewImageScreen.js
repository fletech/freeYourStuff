import { AppLoading } from 'expo';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import colors from '../config/colors'
import Apptext from '../components/Apptext'
import Heading from '../components/Heading'

function ViewImageScreen(props) {
     return (
          <View style={styles.container}>
               <View style={styles.buttonClose}>
                    <MaterialCommunityIcons name="window-close" size={35} color="white" />
               </View>
               <View style={styles.buttonDelete}>
                    <MaterialCommunityIcons name="delete-outline" size={35} color="white" />
               </View>
               <Image 
                    style={styles.image}
                    resizeMode="contain"
                    source={require('../assets/bicicleta.jpg')}/>
          </View>
     );
}

export default ViewImageScreen;

const styles = StyleSheet.create({
     buttonClose:{
          position: 'absolute',
          top: 20,
          left: 30,
          alignItems: "center"
     },
     buttonDelete:{
          position: 'absolute',
          top: 20,
          right: 30,
          alignItems: "center"
     },

     buttonImg:{
          color: colors.white,
          fontSize: 30,
          textAlign: 'center'
     },
     container:{
          backgroundColor: 'rgba(0,0,0,0.9)',
          flex: 1,
          justifyContent: 'center',

     },
     image:{
          width: '100%',
          height: '80%', 
     }
})