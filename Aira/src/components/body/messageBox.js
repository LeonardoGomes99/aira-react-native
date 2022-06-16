import React, {Component} from 'react';
import {
  Text,
  View,
} from 'react-native';


export default class MessagesBox extends Component {
    render(){
        return(
            <View key={this.props.tkey}>
                {this.props.message}
            </View>
        )
    }
}