import {StyleSheet} from 'react-native';

import color from '../../constants/colors';

const style = StyleSheet.create({
  wrapper: {
    backgroundColor: color.BUTTON_BG_COLOR,
    margin: 10,
    elevation: 2,
    borderRadius: 2,
    minHeight: 55,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: color.BUTTON_TEXT_COLOR,
    fontSize: 16
  }
});

export default style;
