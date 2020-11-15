import React, {useState} from 'react';
import {FlatList, StyleSheet, View, Text} from 'react-native';

import colors from '../config/colors'

import Screen from '../components/Screen';
import ListItem from '../components/ListItem'
import Apptext from '../components/Apptext'
import ListItemSeparator from '../components/ListItemSeparator'
import ListItemDeleteActions from '../components/ListItemDeleteActions'


const initialMessages = [
     {
          id: 1,
          title: 'Turco 🇹🇷',
          description: '⌲ salen unos ginebtonics en la baquero?',
          image: require('../assets/Turco.jpg'),
     },
     {
          id: 2,
          title: 'Joto 🇪🇸',
          description: '⌲ perdón amiguito, cambio de planes... 💨',
          image: require('../assets/Joto.jpg'),

     },
     {
          id: 3,
          title: 'Rolo',
          description: '⌲ yendo a Baires a ver Dancing Mood 🎺',
          image: require('../assets/Rolo.jpg'),
     },
     {
          id: 4,
          title: 'Moster',
          description: '⌲ vamos a la cuesta YA',
          image: require('../assets/Checho.jpg'),

     }
]



function MessagresScreen(props) {
     const [messages , setMessages] = useState(initialMessages)
     const [refreshing , setRefreshing] = useState(false)
     const handleDelete = message => {
          
          setMessages(messages.filter((m) => m.id !== message.id))
          //Borrar el mensaje de la lista 
          // LLamar al server para borrar el mensaje
          
     }
     return (
          <Screen>
          <Apptext style={styles.heading}>Chats</Apptext>

          <FlatList
               data={messages}
               keyExtractor={message => message.id.toString()}
               renderItem={({item})=> 
                    <ListItem
                    title={item.title}
                    subtitle={item.description}
                    image={item.image} 
                    onPress={()=> console.log('Mensaje tocado:', item)}
                    renderRightActions={()=> <ListItemDeleteActions
                         onPress={()=> handleDelete(item)}
                    />
               }
               />
          }
               //ItemSeparatorComponent={ListItemSeparator}
               refreshing={refreshing}
               onRefresh={()=>{setMessages([
                    {
                         id: 2,
                         title: 'Joto 🇪🇸',
                         description: '⌲ perdón amiguito, cambio de planes... 💨',
                         image: require('../assets/Joto.jpg'),
               
                    },
                    {
                         id: 3,
                         title: 'Rolo',
                         description: '⌲ yendo a Baires a ver Dancing Mood 🎺',
                         image: require('../assets/Rolo.jpg'),
                    },
                    {
                         id: 4,
                         title: 'Moster',
                         description: '⌲ vamos a la cuesta YA',
                         image: require('../assets/Checho.jpg'),
               
                    }
               ]
                    
               )}}
          ></FlatList>
          </Screen>

     );
}



const styles = StyleSheet.create({
     heading: {
          margin: 15,
          fontSize: 30,
          fontWeight: 'bold'
     },
})

export default MessagresScreen;