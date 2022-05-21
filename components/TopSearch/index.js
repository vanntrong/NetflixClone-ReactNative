import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import colors from '../../assets/colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FastImage from 'react-native-fast-image';

import styles from './styles';
import {useStore} from '../../store';

const TopSearch = ({data, handlePresentModalPress}) => {
  const setCurrentMovieSelect = useStore(state => state.setCurrentMovieSelect);
  const handleClick = () => {
    handlePresentModalPress();
    setCurrentMovieSelect(data.id, data.domainType);
  };
  return (
    <TouchableOpacity onPress={handleClick}>
      <View style={[styles.topSearchItem]}>
        <View style={styles.topSearchItemLeft}>
          {/* <FastImage
            source={{
              uri: data.cover,
              priority: FastImage.priority.low,
              cache: FastImage.cacheControl.immutable,
            }}
            style={styles.topSearchItemImage}
            onError={() => console.log('error fetch image')}
          /> */}
          <Image
            source={{
              uri: data.cover,
            }}
            style={styles.topSearchItemImage}
          />
          <Text style={styles.topSearchItemTitle}>{data.title}</Text>
        </View>
        <View style={styles.topSearchItemRight}>
          <FontAwesome name="play-circle-o" size={28} color={colors.white} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TopSearch;
