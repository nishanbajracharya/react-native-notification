import React, {Component} from 'react';
import {TouchableNativeFeedback, View, Text} from 'react-native';

import style from './style';

class Button extends Component {
  render() {
    return(
      <TouchableNativeFeedback onPress={(e) => this.props.onPress(e)}>
        <View style={[style.wrapper]}>
          <Text style={[style.text]}>{this.props.children || this.props.value}</Text>
        </View>
      </TouchableNativeFeedback>
    );
  }
}

Button.propTypes = {
  children: React.PropTypes.string,
  value: React.PropTypes.string,
  onPress: React.PropTypes.func
};

Button.defaultProps = {
  children: 'Button',
  value: 'Button',
  onPress: () => {}
};

export default Button;
