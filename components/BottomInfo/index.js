import React, {useState, useEffect, useRef} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../../assets/colors';
import {useStore} from '../../store';
import {getDetailApi} from '../../api/homeApi';
import {useNavigation} from '@react-navigation/native';

const BottomInfo = React.forwardRef(({}, bottomSheetModalRef) => {
  const [data, setData] = useState(null);
  const {id, category} = useStore(state => state.currentMovieSelect);
  const navigation = useNavigation();
  const setCurrentMovieSelect = useStore(state => state.setCurrentMovieSelect);

  useEffect(() => {
    const getDetailMovie = async () => {
      if (id !== null && category !== null) {
        const data = await getDetailApi(id, category);
        setData(data);
      }
    };
    getDetailMovie();
  }, [id, category]);

  const playButtonClickHandler = () => {
    bottomSheetModalRef.current?.close();
    navigation.navigate('View', {
      data: data,
      shouldLoad: false,
    });
  };

  const handleCloseBottomSheet = () => {
    setCurrentMovieSelect(null, null);
  };

  return (
    <>
      {/* {data ? (
        
      ) : null} */}
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#000',
        }}>
        <RBSheet
          ref={bottomSheetModalRef}
          closeOnDragDown={true}
          closeOnPressMask
          closeOnPressBack
          animationType="slide"
          height={280}
          onClose={handleCloseBottomSheet}
          customStyles={styles.bottomSheetWrapper}>
          <View style={styles.infoMovieWrapper}>
            {/* show image, name, description */}
            <View style={styles.infoMovieWrapperTop}>
              <Image
                source={{
                  uri: data?.coverVerticalUrl,
                }}
                style={styles.infoMovieImage}
              />
              <View style={styles.infoMovieWrapperTopRight}>
                <View style={styles.infoMovieNameWrapper}>
                  <Text style={styles.infoMovieNameText}>{data?.name}</Text>
                  <TouchableOpacity
                    style={styles.infoMovieCloseButton}
                    onPress={() => bottomSheetModalRef.current?.close()}>
                    <AntDesign name="close" size={24} color={colors.white} />
                  </TouchableOpacity>
                </View>
                <View style={styles.infoMovieSubInfoWrapper}>
                  <Text style={styles.infoMovieSubInfoText}>{data?.year}</Text>
                  <Text style={styles.infoMovieSubInfoText}>
                    {data?.score} scores
                  </Text>
                  <Text style={styles.infoMovieSubInfoText}>
                    {data?.episodeCount} episodes
                  </Text>
                </View>
                <View style={styles.infoMovieDescription}>
                  <Text style={styles.infoMovieDescriptionText}>
                    {data?.introduction}
                  </Text>
                </View>
              </View>
            </View>

            {/* show buttons */}
            <View style={styles.infoMovieActionsWrapper}>
              {/* play button */}

              <TouchableOpacity
                style={styles.infoMovieActionButton}
                onPress={playButtonClickHandler}>
                <View
                  style={[
                    styles.infoMovieActionIcon,
                    {
                      backgroundColor: colors.white,
                    },
                  ]}>
                  <FontAwesome5
                    name="play"
                    size={18}
                    color={colors.blackBold}
                  />
                </View>
                <Text style={styles.infoMovieActionText}>Phát</Text>
              </TouchableOpacity>
              {/* download button */}

              <TouchableOpacity style={styles.infoMovieActionButton}>
                <View style={styles.infoMovieActionIcon}>
                  <Feather name="download" size={16} color={colors.white} />
                </View>
                <Text style={styles.infoMovieActionText}>Tải xuống</Text>
              </TouchableOpacity>
              {/* add to list button */}

              <TouchableOpacity style={styles.infoMovieActionButton}>
                <View style={styles.infoMovieActionIcon}>
                  <Feather name="plus" size={16} color={colors.white} />
                </View>
                <Text style={styles.infoMovieActionText}>Danh sách</Text>
              </TouchableOpacity>
              {/* share button */}

              <TouchableOpacity style={styles.infoMovieActionButton}>
                <View style={styles.infoMovieActionIcon}>
                  <Feather name="share-2" size={16} color={colors.white} />
                </View>
                <Text style={styles.infoMovieActionText}>Chia sẽ</Text>
              </TouchableOpacity>
            </View>
          </View>
        </RBSheet>
      </View>
    </>
  );
});

export default BottomInfo;
