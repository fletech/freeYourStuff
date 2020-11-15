
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


import colors from './app/config/colors'

import BienvenidaGira from './app/screens/BienvenidaGira';

import WelcomeScreen from './app/screens/WelcomeScreen';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen'
import ListingDetail from './app/screens/ListingDetail';
import ViewImageScreen from './app/screens/ViewImageScreen';
import MessagesScreen from './app/screens/MessagesScreen';

import Screen from './app/components/Screen';
import Apptext from './app/components/Apptext'
import Heading from './app/components/Heading'
import ListItem from './app/components/ListItem'
import User from './app/components/User'
import Icon from './app/components/Icon'
import Card from './app/components/Card'
import AppTextInput from './app/components/AppTextInput'
import AppPicker from './app/components/AppPicker';


      /*<WelcomeScreen/>

      <AccountScreen/>

      <ViewCard/>
      
      <ListingDetail/>


      <ViewImageScreen/>

      <MessagesScreen/>
      
      <ListItem
      title ={'flete'}
      subtitle = {'de barrio Yofre'}
      
     />
      */


export default function App() {
  return (
    <Screen>
      <AppTextInput placeholder={'Username'} icon={'share'} />
      <AppTextInput placeholder={'Email'} icon={'email'}/>
      <AppPicker placeholder={'Category'} icon={'apps'}></AppPicker>
      <Card
      
      title={'Mi amigo personal'}
      subtitle={'..y tan entrañable'}
      image={require('./app/assets/Joto.jpg')}
      />
      
    </Screen>
      
      
   
    

    
  );
}

const styles = StyleSheet.create({
    
});
