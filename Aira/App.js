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

export default function App() {

  const [messages, setMessages] = useState([]);
    const [textInput, setTextInput] = useState('');
    const [dicionario, setDicionario] = useState({ "resposta" : {
      "Oi" : "Olá!",
      "Como vai" : "Vou bem, obrigada!",
      "Você está" : "Estou bem.",
      },
    });

    function sendMessage() {   
      if(!textInput){
        return;
      }

      let Message = (<View style={styles.body_chat_main_container_message_me}><Text style={styles.body_chat_main_container_chat_message_me}>{textInput}</Text></View>);
      let AiraAnswer = AiraChooseAnswer(textInput);

      setMessages(prevState => [...prevState, Message, AiraAnswer]);
      setTextInput('');
    }

    function AiraChooseAnswer(MessageFromUser) {
      let AiraAnswer = (<View style={styles.body_chat_main_container_message_aira}><Text style={styles.body_chat_main_container_chat_message_aira}>{dicionario['resposta'][MessageFromUser]}</Text></View>);
      return AiraAnswer;
    }

  return(
    <View style={styles.main}>
      <View style={styles.header} >
          <Text style={styles.header_title} >AIRA CHATBOT</Text>
      </View>
      <View style={styles.body}>
          <View style={styles.messages_box}>
            <ScrollView scrollEnabled={true} showsVerticalScrollIndicator={false}>
                <View style={styles.messagesBox}>
                  {/* 
                  <View style={styles.body_chat_main_container_message_me}>
                      <Text style={styles.body_chat_main_container_chat_message_me}>Leonardo</Text>
                  </View>
                  */}
                  {messages?.map((value, index) => {
                  return(
                  <View key={index}>
                      {value}
                  </View>
                  )       
                  })}
                </View>
            </ScrollView>
          </View>
      </View>
      <View style={styles.footer}>
          <View style={styles.footer_menu}>
            <TextInput value={textInput} onChangeText={(text)=> setTextInput(text) } style={styles.footer_menu_textInput} placeholder="Digite uma Mensagem" underlineColorAndroid="transparent" maxLength={23}/>
            <View style={styles.footer_menu_button_record_icon}>
                <Button title='Record' style={styles.footer_menu_button_send}/>
            </View>
            <View style={styles.footer_menu_button_record_icon}>
                <Button title='Enviar' style={styles.footer_menu_button_send} onPress={sendMessage} />
            </View>
          </View>
      </View>
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