import React from 'react';
import { View,StyleSheet, TouchableWithoutFeedback} from 'react-native';
import colors from '../config/colors';
import {MaterialCommunityIcons} from '@expo/vector-icons';

function ListItemDeleteActions({onPress}) {
     return (
          <TouchableWithoutFeedback onPress={onPress}>
               <View style={styles.container}>
                    <MaterialCommunityIcons name="delete-outline" size={35} color="white" />
               </View>
          </TouchableWithoutFeedback>
     );
}
const styles = StyleSheet.create({
     container:{
          width: 70,
          height: '100%',
          backgroundColor: colors.danger,
          justifyContent: 'center',
          alignItems:'center',
     },
})
export default ListItemDeleteActions;