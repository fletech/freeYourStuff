import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import AppText from './AppText';

function PickerItem({label, onPress}) {
     return (
         <TouchableOpacity onPress={onPress} style={styles.item}>
              <AppText style={styles.text}>{label}</AppText>
         </TouchableOpacity>
     );
}
const styles = StyleSheet.create({
     item:{
          flex: 1,
          justifyContent: 'center'

     },
     text: {
          padding: 10,
          alignItems: 'center'
     },
})
export default PickerItem;