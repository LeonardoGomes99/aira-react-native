import React, {Component} from 'react';
import {
  Text,
  View,
} from 'react-native';

import styles from './header-styles';

export default class Header extends Component {

    render(){
        return(
            <View>
                <View style={styles.header} >
                    <Text style={styles.header_title} >AIRA CHATBOT</Text>
                </View>
            </View>
        )
    }

}