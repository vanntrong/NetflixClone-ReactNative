import {
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import React from 'react';
import {useStore} from '../../../store';

const widthScreen = Dimensions.get('window').width;

const MovieSearch = ({data, handlePresentModalPress}) => {
  const setCurrentMovieSelect = useStore(state => state.setCurrentMovieSelect);
  const handleClick = () => {
    handlePresentModalPress();
    setCurrentMovieSelect(data.id, data.domainType);
  };
  return (
    <TouchableOpacity onPress={handleClick}>
      <View style={styles.searchResultItem}>
        {/* <FastImage
          source={{
            uri: data.coverVerticalUrl,
            priority: FastImage.priority.low,
            cache: FastImage.cacheControl.immutable,
          }}
          style={[styles.searchResultItemImage]}
          onError={() => console.log('error fetch image')}
        /> */}
        <Image
          source={{
            uri: data.coverVerticalUrl,
          }}
          style={styles.searchResultItemImage}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  searchResultItem: {
    flex: 1,
    marginRight: 7,
    marginBottom: 7,
  },
  searchResultItemImage: {
    width: widthScreen / 3 - 7,
    height: 180,
    borderRadius: 5,
  },
});

export default MovieSearch;
