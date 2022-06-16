import React, {Component} from 'react';
import {
  TextInput,
  Button,
  View,
} from 'react-native';

import styles from './footer-styles';

export default class Footer extends Component {
    constructor(props){
        super(props);
        this.state = {
            input: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            input: event
        });
    }

    render(){
        return(
            <View>
                <View style={styles.footer}>
                    <View style={styles.footer_menu}>
                        <TextInput value={this.state.input} onChangeText={this.handleChange} style={styles.footer_menu_textInput} placeholder="Digite uma Mensagem" underlineColorAndroid="transparent" maxLength={23}/>
                        <View style={styles.footer_menu_button_record_icon}>
                            <Button title='Record' style={styles.footer_menu_button_send}/>
                        </View>
                        <View style={styles.footer_menu_button_record_icon}>
                            <Button title='Enviar' style={styles.footer_menu_button_send} onPress={() => this.props.MainAndFooterButton(this.state.input) } />
                        </View>
                    </View>
                </View>
            </View>
        )
    }
 
}
