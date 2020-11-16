import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

import AppText from '../components/AppText'
import Card from '../components/Card'
import Screen from '../components/Screen'
import Heading from '../components/Heading'
import colors from '../config/colors'
     
const listings =[{
          id: 1,
          title: 'Veloretti bike',
          subtitle: 'Good condition',
          location: 'København',
          user: '@turco',
          image: require('../assets/bicicleta.jpg'),

     },
     {
          id: 2,
          title: 'T-shirts / Trousers',
          subtitle: 'Many sizes',
          location: 'København',
          user: '@turco',
          image: require('../assets/shirts.jpg'),
          availability: 'Urgent',
     },
     {
          id: 2,
          title: 'Kitchen stuffs',
          subtitle: 'Varieted',
          location: 'København',
          user: '@turco',
          image: require('../assets/kitchenStuffs.jpg'),
          availability: 'ASAP',
     },
     {
          id: 2,
          title: 'Acoustic Bass',
          subtitle: 'Fender',
          location: 'København',
          user: '@turco',
          image: require('../assets/bass.jpg'),
          
     },
]

function ListingsScreen({props}) {
     return (
          <Screen style={styles.container}>
               <FlatList
                    data= {listings}
                    keyExtractor= {listing => listing.id.toString()}
                    renderItem= {({ item }) => (
                         <Card
                              title={item.title}
                              subtitle={item.subtitle}
                              location={item.location}
                              user={item.user}
                              image={item.image}
                              availability={item.availability}
                         />
                    )}
               />
          
          </Screen>
     );
}

export default ListingsScreen;

const styles = StyleSheet.create({
     container:{
          paddingHorizontal: 15,
     },
     cardContainer:{
          marginTop: 0,
          backgroundColor: '#eaeaea',
          height:'100%',
          display:'flex',
          alignItems: 'center',
          paddingTop: 20
     },
})