import React from 'react';
import { StyleSheet, View, } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import colors from '../config/colors'

function Menu({props}) {
     return (
          <View style={styles.menu}>
                    <MaterialCommunityIcons name="menu" size={40} color={'rgba(255,255,255,0.7)'} />
          </View>
     );
}

export default Menu;


const styles = StyleSheet.create({

     menu:{
          position: 'absolute',
          top: 30,
          right: 10
     },
})