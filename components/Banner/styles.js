import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';
import {customFont} from '../../shared/constand';

export default StyleSheet.create({
  container: {
    height: 550,
  },
  backgroundWrapper: {
    width: '100%',
    height: 450,
  },
  buttonsWrapper: {
    marginTop: 20,
    marginHorizontal: 54,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonItem: {
    alignItems: 'center',
  },
  buttonItemText: {
    color: colors.white,
    fontFamily: customFont.regular,
    fontSize: 14,
    marginTop: 5,
  },
  buttonPlay: {
    backgroundColor: colors.gray,
    width: 130,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 8,
    paddingVertical: 15,
  },
  buttonPlayText: {
    color: colors.blackBold,
    fontFamily: customFont.bold,
    marginLeft: 15,
  },
  bannerNameMovie: {
    fontSize: 20,
    color: colors.white,
    fontFamily: customFont.bold,
    width: '100%',
    textAlign: 'center',
    marginTop: 5,
  },
});
