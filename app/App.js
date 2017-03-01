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
    Notification.notify({message: this.state.message, bigText: 'BIG TEXT', subText: 'Small Text'});
  }

  render() {
    return(
      <View style={[style.view]}>
        <StatusBar backgroundColor={color.STATUSBAR_BG_COLOR} barStyle={color.STATUSBAR_TEXT_COLOR} />
        <View>
          <TextInput style={[style.textInput]} placeholder='Hello' onChangeText={(text) => this.setState({message: text})}/>
          <Button onPress={() => this.onPress()}>Push Notification</Button>
        </View>
      </View>
    );
  }
}

export default App;
