import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import defStyles from '../config/defStyles';


function Icon({
     name,
     name2,
     size =40,
     backgroundColor= defStyles.colors.black,
     iconColor= defStyles.colors.white,
     style
}) {
     return (
          <View style={[{
               width: size,
               height: size,
               borderRadius: size/2,
               backgroundColor,
               justifyContent: 'center',
               alignItems: 'center',
        
          },style]}>
               <MaterialCommunityIcons name={name} size={size * 0.5} color={iconColor} />
               

          </View>
     );
}

const styles = StyleSheet.create({
     
})
export default Icon;