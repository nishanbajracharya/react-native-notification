import React, {Component} from 'react';
import {View, StatusBar, TextInput} from 'react-native';

import style from './style';

import color from './constants/colors';

import Button from './components/Button';

import Notification from './Notification';

class App extends Component {
  constructor() {
    super();

    this.state = {
      message: 'Hello'
    };

    this.onPress = this.onPress.bind(this);
  }
  onPress() {
    const notificationMsg = {
      id: '1',
      url: 'google.com',
      bigText: 'BIG TEXT',
      subText: 'Small Text',
      title: 'Notification',
      message: this.state.message
    };
    Notification(notificationMsg);
  }

  render() {
    return (
      <View style={[style.view]}>
        <StatusBar backgroundColor={color.STATUSBAR_BG_COLOR} barStyle={color.STATUSBAR_TEXT_COLOR}/>
        <View>
          <TextInput style={[style.textInput]} placeholder='Hello' onChangeText={(text) => this.setState({message: text ? text : 'Hello'})}/>
          <Button onPress={() => this.onPress()}>Push Notification</Button>
        </View>
      </View>
    );
  }
}

export default App;
