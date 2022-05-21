import {View, Text, ScrollView} from 'react-native';
import React, {useRef, useEffect, useState} from 'react';
import styles from './styles';
import Banner from '../../components/Banner';
import ListMovie from '../../components/ListMovie';
import BottomInfo from '../../components/BottomInfo';
import {getHomeApi} from '../../api/homeApi';
import {OrientationLocker, PORTRAIT} from 'react-native-orientation-locker';

const HomeScreen = () => {
  const [homeData, setHomeData] = useState([]);
  const bottomSheetModalRef = useRef();

  const handlePresentModalPress = callback => {
    bottomSheetModalRef.current?.open();
    if (typeof callback === 'function') callback();
  };

  useEffect(() => {
    const getHome = async () => {
      const data = await getHomeApi();
      setHomeData(data);
    };
    getHome();
  }, []);

  return (
    <View style={styles.container}>
      <OrientationLocker orientation={PORTRAIT} />
      <ScrollView>
        {homeData.length > 0 && (
          <Banner
            handlePresentModalPress={handlePresentModalPress}
            data={homeData[0]?.recommendContentVOList[0]}
          />
        )}
        {homeData.length > 0 &&
          homeData.map(data => (
            <ListMovie
              handlePresentModalPress={handlePresentModalPress}
              data={data}
              key={data.homeSectionId}
            />
          ))}

        {/* bottom info */}
        <BottomInfo ref={bottomSheetModalRef} />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
