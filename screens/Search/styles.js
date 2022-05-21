import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';
import {customFont} from '../../shared/constand';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blackBold,
  },
  searchWrapper: {
    marginTop: 35,
    paddingLeft: 22,
    backgroundColor: colors.blackLight,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    color: colors.white,
    marginLeft: 10,
    fontSize: 16,
    flex: 1,
  },
  topSearchWrapper: {
    flex: 1,
    marginTop: 21,
  },
  topSearchTitle: {
    fontSize: 26,
    fontFamily: customFont.bold,
    color: colors.white,
    marginLeft: 10,
    marginBottom: 21,
  },
  topSearchList: {},

  searchResultList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
