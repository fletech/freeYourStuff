import React from 'react';
import { Image, ImageBackground , StyleSheet, Text, View } from 'react-native';
import { Video } from 'expo-av';
import { MaterialCommunityIcons } from '@expo/vector-icons';



import colors from '../config/colors'
import Apptext from '../components/Apptext'
import Heading from '../components/Heading'
import ButtonGira from '../components/ButtonGira'
import Icon from '../components/Icon'
import Menu from '../components/Menu'
import Screen from '../components/Screen'


function BienvenidaGira(props) {
     return (
          <View style={styles.container}>

               <Video
                    source={ require('../assets/bannerGira.mp4') }
                    rate={1.0}
                    volume={1.0}
                    isMuted={false}
                    resizeMode="cover"
                    shouldPlay
                    isLooping
                    style={{ width: '100%', height: '100%', position:'absolute', opacity: 0.9  }}
               />
               <Icon 
                    name2={'search'}
                    backgroundColor= {0}
                    size ={60}
                    color= {'white'}
                    iconColor= {colors.white}
                    styles={{position: 'absolute', top: 10, left: 15, }}
                    />
               <Menu/>

               <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={ require('../assets/logoGira.png')}/>
                    
               </View>

               <View style={styles.botones}>
                    
                    
                    <ButtonGira
                    title={'QUIERO UN SHOW EN MI CASA'}
                    color={'rgba(241,174,33,0.64)'}
                    iconName={'home-heart'}
                    colorIcon={0}
                    />
                    <ButtonGira
                    title={'SOY ARTISTA'}
                    color={'rgba(241,174,33,0.64)'}
                    iconName={'music'}
                    colorIcon={0}
                    />
                    <ButtonGira
                    
                    
                    title={'TICKETS'}
                    color={'rgba(241,174,33,0.64)'}
                    iconName={'ticket-confirmation'}
                    colorIcon={0}
                    />

               </View>
               
               

          </View>
          
     );
}


const styles = StyleSheet.create({
     container:{
          flex:1,
          justifyContent: "flex-end",
          position:'relative', 
          height: '100%'
     },
     
     logo:{
          width: 180,
          height: 190,
          marginBottom: 0,
          opacity: 0.8
     },
     logoContainer:{
          position: 'absolute',
          top: 90,
          alignItems: "center",
          width: '100%',
          height: '100%',
       
     },
     botones:{
          justifyContent: 'flex-end',
          marginBottom: 30
     },
     bienvenida:{
          color: 'rgba(255,255,255,0.7)'
     },
     
     
     
})
export default BienvenidaGira;