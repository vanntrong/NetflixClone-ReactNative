import {View, Text, TextInput, ScrollView} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import styles from './styles';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../../assets/colors';
import TopSearch from '../../components/TopSearch';
import {getTopSearchApi} from '../../api/searchApi';
import BottomInfo from '../../components/BottomInfo';
import useSearchMovie from '../../hooks/useSearchMovie';
import MovieSearch from '../../components/ListMovie/MovieSearch';

const SearchScreen = () => {
  const [topSearch, setTopSearch] = useState([]);
  const [searchText, setSearchText] = useState('');
  const bottomSheetModalRef2 = useRef();
  const {searchResult} = useSearchMovie(searchText);

  const handlePresentModalPress = callback => {
    bottomSheetModalRef2.current?.open();
    if (typeof callback === 'function') callback();
  };

  useEffect(() => {
    const getTopSearch = async () => {
      const res = await getTopSearchApi();
      setTopSearch(res);
    };
    getTopSearch();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.searchWrapper}>
          <Feather name="search" size={16} color={colors.gray} />
          <TextInput
            placeholder="Tìm kiếm chương trình, phim,..."
            style={styles.searchInput}
            placeholderTextColor={colors.gray}
            value={searchText}
            onChangeText={val => setSearchText(val)}
          />
        </View>

        {searchResult.length === 0 && (
          <View style={styles.topSearchWrapper}>
            <Text style={styles.topSearchTitle}>Tìm kiếm hàng đầu</Text>
            <View style={styles.topSearchList}>
              {topSearch.length > 0 &&
                topSearch.map(item => (
                  <TopSearch
                    data={item}
                    handlePresentModalPress={handlePresentModalPress}
                    key={item.id}
                  />
                ))}
            </View>
          </View>
        )}

        {searchResult.length > 0 && (
          <View style={styles.searchResultWrapper}>
            <Text style={styles.topSearchTitle}>
              Phim và chương trình truyền hình
            </Text>
            <View style={styles.searchResultList}>
              {searchResult.map(item => (
                <MovieSearch
                  data={item}
                  key={item.id}
                  handlePresentModalPress={handlePresentModalPress}
                />
              ))}
            </View>
          </View>
        )}
        <BottomInfo ref={bottomSheetModalRef2} />
      </ScrollView>
    </View>
  );
};

export default SearchScreen;
