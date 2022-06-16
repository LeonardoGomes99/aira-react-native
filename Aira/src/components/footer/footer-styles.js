import { StyleSheet } from 'react-native';
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';


export default StyleSheet.create({
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