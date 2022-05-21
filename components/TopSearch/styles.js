import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';
import {customFont} from '../../shared/constand';

export default StyleSheet.create({
  topSearchItem: {
    marginBottom: 5,
    backgroundColor: colors.blackLight,
    height: 76,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 10,
  },
  topSearchItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  topSearchItemImage: {
    width: 146,
    height: 76,
  },
  topSearchItemTitle: {
    fontSize: 15,
    color: colors.white,
    fontFamily: customFont.regular,
    marginLeft: 10,
  },
  topSearchItemRight: {},
});
