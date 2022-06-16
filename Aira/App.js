import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  Button,
  View,
  ScrollView,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';

import Footer from './src/components/footer/footer';
import Header from './src/components/header/header';
import MessagesBox from './src/components/body/messageBox';


export default function App() {

  const [messages, setMessages] = useState([]);
  const [dicionario, setDicionario] = useState({ "resposta" : {
    "Oi" : "Olá!",
    "Como vai" : "Vou bem, obrigada!",
    "Você está" : "Estou bem.",
    },
  });

    function sendMessage(message) {   
      if(!message){
        return;
      }

      let Message = (<View style={styles.body_chat_main_container_message_me}><Text style={styles.body_chat_main_container_chat_message_me}>{message}</Text></View>);
      let AiraAnswer = AiraChooseAnswer(message);

      setMessages(prevState => [...prevState, Message, AiraAnswer]);
      // setTextInput('');
    }

    function AiraChooseAnswer(MessageFromUser) {
      let AiraAnswer = (<View style={styles.body_chat_main_container_message_aira}><Text style={styles.body_chat_main_container_chat_message_aira}>{dicionario['resposta'][MessageFromUser]}</Text></View>);
      return AiraAnswer;
    }

    function MainAndFooterButton(message){
      sendMessage(message);
    }




  return(
    <View style={styles.main}>
      <Header/>
      <View style={styles.body}>
        
          <View style={styles.messages_box}>
            <ScrollView scrollEnabled={true} showsVerticalScrollIndicator={false}>
                <View style={styles.messagesBox}>                  
                  {messages.map((value,item)=> {
                    return(
                      <MessagesBox tkey={item}
                      message={value}
                      />
                    )
                  })}
                </View>
            </ScrollView>
          </View>

      </View>
      <Footer MainAndFooterButton={MainAndFooterButton} />
    </View>
  );

}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#222',
  },
  header: {
    height: vh(8),
    backgroundColor: '#222',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header_title: {
    color: '#fff'
  },

  body: {
    flex: 1,
    backgroundColor: '#fff',
  },
  messages_box:{
    height: vh(80),
    marginHorizontal: 10,
  },
  messagesBox:{
    //backgroundColor: 'red',
  },  
  
  body_chat_main_container: {
    borderColor: 'black',
    borderBottomWidth:1,
    borderTopWidth:1, 
    padding: 1,
    margin: 20,      
  },
  body_chat_main_container_message_aira: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  body_chat_main_container_message_me: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',      
  },
  body_chat_main_container_chat_message_aira: {
    borderColor: '#aff',
    backgroundColor: '#aff',
    width: '50%',     
    fontSize: 12,        
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth:1,
    borderTopWidth:1, 
    borderRadius: 20,
    padding: 16,
    margin: 20,    
  },

  body_chat_main_container_chat_message_me: {
    borderColor: '#fcf',
    backgroundColor: '#fcf',
    width: '50%',     
    fontSize: 12,       
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth:1,
    borderTopWidth:1, 
    borderRadius: 20,
    padding: 16,
    margin: 20,            
  },

  footer: {
    height: vh(10),
    width: '100%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#222',
  },
  footer_menu: {
    flex: 1,
    marginTop: 5,
    marginStart: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  footer_menu_textInput: {
    backgroundColor: '#fff',
    height: vh(6),
    fontSize: 12,
    borderRadius: 20,
    padding: 15,
    width: '55%',
  },  
  footer_menu_button_record: { 
    padding: 7,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: '#30a0d2',

  },
  footer_menu_button_record_icon: {
    flex: 1,      
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  footer_menu_button_send: { 
    padding: 7,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: '#30a0d2',

  },
  footer_menu_button_send_icon: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
});