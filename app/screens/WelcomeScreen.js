import React from 'react';
import { Image, ImageBackground , StyleSheet, Text, View } from 'react-native';
 


import colors from '../config/colors'
import Apptext from '../components/Apptext'
import Heading from '../components/Heading'
import Login from '../components/LoginButton'
import Register from '../components/RegisterButton'
import Menu from '../components/Menu'
import Icon from '../components/Icon'


function WelcomeScreen(props) {
     return (
          <ImageBackground
               source={ require('../assets/backgroundBoxes2.jpg')}
               style={styles.background}
               blurRadius={0}
               resizeMode={'cover'}>
               

               <View style={styles.logoContainer}>
                    {Image && <Image style={styles.logo} />}
                    <Heading style={styles.logoSlogan}>freeYourStuff</Heading>
                    <Apptext style={styles.bienvenida}>copenhagen</Apptext>
               </View>

               <Icon
               name={'magnify'}
               backgroundColor={ 'rgba(0,0,0,0.3)'}
               size={45}
               iconColor={colors.white}
               style={styles.search}
               />

               <Menu/>

               <Login title={'login'}/>

               <Register/>

          </ImageBackground>
          
     );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
     background: {
          flex: 1,
          justifyContent: "flex-end",
          alignItems: 'center',
          
     },
     search:{
          position: 'absolute',
          top: 30,
          left: 15
     },
     
     logo:{
          width: 130,
          height: 150,
          marginBottom: 0,
     },
     logoContainer:{
          position: 'absolute',
          top: 0,
          alignItems: "center",
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.3)',
          paddingTop:30, 
          shadowColor: colors.white,
          shadowOffset: {width: 10, height: 10},
          shadowOpacity: 0.3,
          shadowRadius: 8,
     },
     logoSlogan:{
          color: 'rgba(255,255,255,0.8)',
          fontWeight: 'bold',
          fontSize: 40,
     },
     bienvenida:{
          color: 'rgba(255,255,255,0.8)'
     },
    
    
     
     
})