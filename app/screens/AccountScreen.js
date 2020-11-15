import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import User from '../components/User'
import Apptext from '../components/Apptext'
import colors from '../config/colors'
import ListItemSeparator from '../components/ListItemSeparator';
import Icon from '../components/Icon';
import App from '../../App';


const menuItems = [
     {
          title: 'My profile',
          icon: {
               name: 'account-box',
               backgroundColor: colors.primary,
               size: 40,
          }
     },

     {
          title: 'My messages',
          icon: {
               name: 'email',
               backgroundColor: colors.secondary,
               size: 40,
          }

     },
     {
          title: 'My Listings',
          icon: {
               name:'format-list-bulleted',
               backgroundColor: colors.black,
               size: 40,
          }

     },
     {
          title: 'Share',

          icon: {
               name:'share-variant',
               backgroundColor: 'dodgerblue',
               size: 40,
          }

     },
     {
          title: 'Search',

          icon: {
               name:'magnify',
               backgroundColor: 'dodgerblue',
               size: 40,
          }

     },
     {
          title: 'Contact us',

          icon: {
               name:'headphones',
               backgroundColor: colors.black,
               size: 40,
          }

     },
     {
          title: 'Terms & conditions',

          icon: {
               name:'file-alert-outline',
               backgroundColor: colors.black,
               size: 40,
          }

     },

]

//   style={styles}
function AccountScreen(props) {
     return (
          <View style={styles.container}>
               <View>
               <User
                    name={'Alejandro Sahab'}
                    subtitle={'factura-O-menu@hotmail.com'}
                    image={require('../assets/Turco.jpg')}
                    style={styles.user}
                    EditComponent= {
                         <View style={{position: 'absolute', flexDirection: 'row', alignItems: 'center', right: 20}}>
                              <Icon
                              name= 'border-color'
                              size= {30}
                              backgroundColor={0}
                              iconColor= {colors.secondary}

                              />
                              {edit && <Apptext style={{fontSize: 16, color: colors.secondary}}>{edit}</Apptext>}</View>
                    }
               />
               
               </View>
               <FlatList
               data={menuItems}
               keyExtractor={(menuItem) => menuItem.title}
               ItemSeparatorComponent= {ListItemSeparator}
               renderItem={({item})=>(
                    <User
                    title={item.title}
                    IconComponent={<Icon
                         name={item.icon.name}
                         color={colors.white}
                         size={item.icon.size}
                         backgroundColor={item.icon.backgroundColor}
                         />}
                    style={styles.list}
                    />
                    
               )}
               style={{marginVertical:20}}
               >
               
               
                    

               </FlatList>

               

               <View style={styles.logOutNavigation}>
                    <User
                    title={'Log out'}
                    IconComponent={<Icon
                         name={'logout'}
                         color={colors.white}
                         size={40}
                         backgroundColor={colors.danger}
                         />}
                    style={styles.list}
                    />

                    
               </View>
          </View>
          
     );
}

const styles = StyleSheet.create({
     container:{
          flex:1,
          marginTop: 10,
     },
     
     user:{
          paddingLeft: 20,
          backgroundColor: colors.white,
     },
     mainNavigation:{
          marginVertical: 15
     },
     list:{
          flexDirection: 'row',
          alignItems:'center',
          height: 70,
          backgroundColor: colors.white,
          paddingLeft: 20
     },
     
     text:{
          paddingLeft: 10,
          color: colors.black
     },

})
export default AccountScreen;