import {View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import FastImage from 'react-native-fast-image';
import {useStore} from '../../../store';

const Movie = ({style, data, handlePresentModalPress}) => {
  const setCurrentMovieSelect = useStore(state => state.setCurrentMovieSelect);

  const handleClick = () => {
    handlePresentModalPress();
    setCurrentMovieSelect(data.id, data.category);
  };

  return (
    <TouchableOpacity onPress={handleClick}>
      <View style={styles.container}>
        {/* <FastImage
          source={{
            uri: data.imageUrl,
            priority: FastImage.priority.low,
            cache: FastImage.cacheControl.immutable,
          }}
          style={[styles.image, style]}
          onError={() => console.log('error fetch image')}
        /> */}
        <Image
          source={{
            uri: data.imageUrl,
          }}
          style={[styles.image, style]}
        />
      </View>
    </TouchableOpacity>
  );
};

export default Movie;
