import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Platform, TouchableWithoutFeedback, Modal, Button, FlatList } from 'react-native';

import { MaterialCommunityIcons} from '@expo/vector-icons';

import AppText from './AppText'
import PickerItem from './PickerItem'

import defStyles from '../config/defStyles'

import Screen from '../components/Screen';


function AppPicker({icon, items , onSelectItem, placeholder, selectedItem}) {
     const [modalVisible, setModalVisible] = useState(false);
       return (
          <>
               
                    <TouchableWithoutFeedback onPress= {() => setModalVisible(true)} >
                         <View style={styles.container}>
                              {icon && <MaterialCommunityIcons name={icon} color={defStyles.colors.secondaryBlur} size={16} style={styles.icon}/>}
                              <AppText style={styles.text}>{selectedItem ? selectedItem.label : placeholder}</AppText>
                              <MaterialCommunityIcons name='chevron-down' color={defStyles.colors.secondaryBlur} size={16}/>
                         </View>
                    </TouchableWithoutFeedback>

                    <Modal visible={modalVisible} animationType={'slide'}>
                         <Screen style={styles.categories}>
                              <Button
                              title={'Close'}
                              onPress={()=> setModalVisible(false)}
                              />
                              <FlatList 
                                   data = {items}
                                   keyExtractor = { item  => item.value.toString() }
                                   renderItem = {( { item } ) => 
                                   <PickerItem
                                   label={item.label}
                                   onPress={()=> {
                                   setModalVisible(false);
                                   onSelectItem(item);
                                   }}/>
                                    }/>
                         </Screen>
                    </Modal>
          </>
     );
}
 
const styles = StyleSheet.create({
     categories: {
           
          backgroundColor: defStyles.colors.grey,
          width: '100%',
          height: 500,
     },

     container: {
          backgroundColor: defStyles.colors.white,
          alignItems: 'center',
          borderRadius: 25,
          flexDirection: 'row',
          width: '100%',
          padding: 15,
          paddingVertical: 10,
          marginVertical: 10,
          borderColor: defStyles.colors.secondaryBlur,
          borderWidth: 0.3,
     
     },
     
     icon:{
          marginRight: 10,
     },
     text:{
          flex:1,
     },
     
})
export default AppPicker;




/* const categories = [
  { label: 'Select a category...', value: 0 },
  { label: 'Books', value: 1 },
  { label: 'Clothes', value: 2 },
  { label: 'Electronic', value: 3 },
  { label: 'Furniture', value: 4 },
  { label: 'Home & Deco', value: 5 },
  { label: 'Instruments', value: 6 },
  { label: 'Kitchen', value: 7 },
  { label: 'Music', value: 8 },
  { label: 'Non-perishable food', value: 9 },
]

export default function App() {
 const [category, setCategory] = useState(categories[0])
  return (
    <Screen style={{backgroundColor: defStyles.colors.black}}>
     <AppTextInput placeholder={'Username'} icon={'share'} />
      <AppTextInput placeholder={'Email'} icon={'email'}/>
      <AppPicker 
      selectedItem={category}
      onSelectItem= {item => setCategory(item) }
      placeholder={'Category'} 
      icon={'apps'} 
      items={categories}/>
      
      
    </Screen>
      
      
   
    

    
  );
}*/