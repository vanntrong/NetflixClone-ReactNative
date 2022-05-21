import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';
import {customFont} from '../../shared/constand';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  listTitle: {
    fontFamily: customFont.bold,
    color: colors.white,
    marginLeft: 16,
    fontSize: 20,
  },
  listWrapper: {
    marginTop: 14,
    flexDirection: 'row',
  },
});
