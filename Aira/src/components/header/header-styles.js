import { StyleSheet } from 'react-native';
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';


export default StyleSheet.create({
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
});