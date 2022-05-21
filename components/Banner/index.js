import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import Header from '../header/index';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import colors from '../../assets/colors';
import {useStore} from '../../store/index';
import {useNavigation} from '@react-navigation/native';

const Banner = ({data, handlePresentModalPress}) => {
  const setCurrentMovieSelect = useStore(state => state.setCurrentMovieSelect);
  const navigation = useNavigation();
  const clickInfoHandler = () => {
    handlePresentModalPress();
    setCurrentMovieSelect(data.id, data.category);
  };
  const clickPlayHandler = () => {
    navigation.navigate('View', {
      data: data,
      shouldLoad: true,
    });
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: data.imageUrl,
        }}
        style={styles.backgroundWrapper}>
        <Header />
      </ImageBackground>
      <Text style={styles.bannerNameMovie}>{data.title}</Text>
      <View style={styles.buttonsWrapper}>
        <View style={styles.buttonItem}>
          <Feather name="plus" size={16} color={colors.white} />
          <Text style={styles.buttonItemText}>Danh sách</Text>
        </View>
        <TouchableOpacity onPress={clickPlayHandler}>
          <View style={styles.buttonPlay}>
            <FontAwesome5 name="play" size={18} color={colors.blackBold} />
            <Text style={styles.buttonPlayText}>Phát</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={clickInfoHandler}>
          <View style={styles.buttonItem}>
            <Feather name="info" size={16} color={colors.white} />
            <Text style={styles.buttonItemText}>Thông tin</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Banner;
