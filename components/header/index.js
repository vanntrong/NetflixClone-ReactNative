import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import Logo from '../../assets/images/logo.png';

const Header = () => {
  return (
    <View style={styles.headerWrapper}>
      <Image source={Logo} style={styles.headerImage} />
    </View>
  );
};

export default Header;
