import React, { useState } from 'react';
import { Image, ImageBackground , StyleSheet, View } from 'react-native';
import {Formik} from 'formik';


import defStyles from '../config/defStyles';


import Screen from '../components/Screen'
import AppText from '../components/AppText'
import Heading from '../components/Heading'
import AppButton from '../components/LoginButton'

import Menu from '../components/Menu'

import AppTextInput from '../components/AppTextInput';


function LoginScreen(props) {
     
     return (
          <Screen>

          <ImageBackground
               source={ require('../assets/background.jpg')}
               style={styles.background}
               blurRadius={0}
               resizeMode={'cover'}>
               

               <View style={styles.logoContainer}>
                    {Image && <Image style={styles.logo} />}
                    <Heading style={styles.logoSlogan}>freeYourStuff</Heading>
                    <AppText style={styles.bienvenida}>copenhagen</AppText>
                   
               <Formik 
               initialValues={{email:'', password:''}}
               onSubmit={(values)=> console.log(values)}
               >
               {({handleChange, handleSubmit}) => (
                    <>

                         <AppTextInput
                         autoCapitalize= 'none'
                         autoCorrect= {false}
                         icon= 'email'
                         keyboardType= 'email-address'
                         onChangeText = {handleChange('email')}
                         placeholder= 'email'
                         textContentType= 'emailAddress'

                         />
                         <AppTextInput
                         autoCapitalize= 'none'
                         autoCorrect= {false}
                         icon= 'lock'
                         placeholder= 'Password'
                         onChangeText = {handleChange('password')}

                         secureTextEntry
                         textContentType= 'password'

                         />
                         <AppText style={styles.text}>❒ Keep logged-in</AppText>
                         <AppButton 
                         title={'login'} 
                         icon={'email'} 
                         style={styles.button}
                         onPress={handleSubmit}/>
                    </>

               )

               }

               </Formik>
                    
                     </View>
               


               <Menu/>


               

          </ImageBackground>
          </Screen>
     );
}



const styles = StyleSheet.create({
     background: {
          flex: 1,
     },
     button:{
          width: '90%',
          backgroundColor: defStyles.colors.secondary,
     },
     
     logoContainer:{
     
          justifyContent: 'center',
          alignItems: "center",
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.4)',
          
     },
     logoSlogan:{
          color: defStyles.colors.white,
          fontWeight: 'bold',
          fontSize: 40,
     },
     bienvenida:{
          color: defStyles.colors.white,
          textAlign: 'center',
          fontSize: defStyles.text.fontSize+4,
          marginBottom: 50
     },
     text: {
          marginVertical:5,
          textAlign: 'center',
          color: defStyles.colors.white
     },
    
    
     
     
})

export default LoginScreen;