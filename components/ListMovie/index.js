import {View, Text, FlatList} from 'react-native';
import React from 'react';
import styles from './styles';
import Movie from './Movie/index';

const ListMovie = ({handlePresentModalPress, data}) => {
  const renderItem = ({item, index}) => (
    <Movie
      data={item}
      style={{marginLeft: index === 0 ? 17 : 0}}
      handlePresentModalPress={handlePresentModalPress}
    />
  );
  return (
    <View style={styles.container}>
      <Text style={styles.listTitle}>{data.homeSectionName}</Text>
      <View style={styles.listWrapper}>
        <FlatList
          data={data?.recommendContentVOList}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          initialNumToRender={50}
        />
      </View>
    </View>
  );
};

export default ListMovie;
