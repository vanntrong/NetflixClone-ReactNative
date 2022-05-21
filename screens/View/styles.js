import {StyleSheet} from 'react-native';
import colors from '../../assets/colors/index';
import {customFont} from '../../shared/constand';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blackBold,
    position: 'relative',
  },
  infoMovieWrapper: {
    flex: 1,
    backgroundColor: colors.blackBold,
    paddingTop: 10,
  },
  infoMovieTitle: {
    color: colors.white,
    fontFamily: customFont.bold,
    fontSize: 28,
    marginBottom: 10,
  },
  infoMovieIntro: {
    color: colors.white,
    fontFamily: customFont.regular,
    fontSize: 16,
  },
  infoMovieTagsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  infoMovieTagsTitle: {
    color: colors.white,
    fontFamily: customFont.bold,
    fontSize: 16,
    marginRight: 10,
  },
  infoMovieTagsText: {
    color: colors.gray,
    fontFamily: customFont.regular,
    fontSize: 14,
    marginRight: 10,
  },
  episodesWrapper: {
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  episodesWrapperTitle: {
    color: colors.white,
    marginTop: 20,
    fontFamily: customFont.bold,
    fontSize: 20,
  },
  episodeItem: {
    width: 65,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: '#343a40',
    marginLeft: 10,
    marginBottom: 10,
  },
  episodeItemText: {
    color: colors.white,
    fontFamily: customFont.bold,
  },
});
