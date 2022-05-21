import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';
import {customFont} from '../../shared/constand';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  backdrop: {
    backgroundColor: 'red',
  },
  bottomSheetWrapper: {
    wrapper: {
      backgroundColor: 'transparent',
    },
    draggableIcon: {
      backgroundColor: '#000',
      display: 'none',
    },
  },
  infoMovieWrapper: {
    backgroundColor: '#222',
    paddingHorizontal: 10,
    paddingVertical: 10,
    flex: 1,
  },
  infoMovieWrapperTop: {
    flexDirection: 'row',
  },
  infoMovieImage: {
    width: 115,
    height: 160,
  },
  infoMovieWrapperTopRight: {
    marginLeft: 10,
    flex: 1,
  },
  infoMovieNameWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoMovieNameText: {
    color: colors.white,
    fontFamily: customFont.bold,
    width: '85%',
    fontSize: 20,
  },
  infoMovieCloseButton: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#495057',
    borderRadius: 50,
  },
  infoMovieSubInfoWrapper: {
    flexDirection: 'row',
    marginTop: 5,
  },
  infoMovieSubInfoText: {
    color: colors.gray,
    fontFamily: customFont.regular,
    fontSize: 14,
    marginRight: 20,
  },
  infoMovieDescription: {
    marginTop: 10,
    height: 98,
  },
  infoMovieDescriptionText: {
    color: colors.white,
    fontFamily: customFont.regular,
    fontSize: 16,
  },
  infoMovieActionsWrapper: {
    flex: 1,
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between',
  },
  infoMovieActionButton: {
    alignItems: 'center',
  },
  infoMovieActionIcon: {
    width: 35,
    height: 35,
    backgroundColor: '#495057',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoMovieActionText: {
    color: colors.gray,
    fontFamily: customFont.regular,
    fontSize: 14,
    marginTop: 5,
  },
});
