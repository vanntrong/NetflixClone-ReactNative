import {View, StyleSheet, Dimensions, StatusBar} from 'react-native';
import React, {useState, useEffect} from 'react';
import VideoPlayer from 'react-native-video-controls';
import Orientation from 'react-native-orientation-locker';
import {useNavigation} from '@react-navigation/native';
import {getMediaApi} from '../../api/homeApi';
const {width, height} = Dimensions.get('window');

const CustomPlayer = ({
  category,
  contentId,
  episodeId,
  definition,
  subtitle,
}) => {
  const [fullScreen, setFullScreen] = useState(width > height);
  const [media, setMedia] = useState(null);
  const navigation = useNavigation();

  const enterFullscreen = () => {
    Orientation.lockToLandscape();
    setFullScreen(true);
  };

  const exitFullscreen = () => {
    Orientation.lockToPortrait();
    setFullScreen(false);
  };

  useEffect(() => {
    const getMedia = async () => {
      const media = await getMediaApi({
        category,
        contentId,
        episodeId,
        definition,
      });
      setMedia(media);
    };
    getMedia();
    return () => {
      setMedia(null);
    };
  }, [category, contentId, episodeId, definition]);

  return (
    <>
      <View style={[styles.container]}>
        <View
          style={[
            styles.video,
            {
              width: !fullScreen ? width : height,
              height: !fullScreen ? 300 : width,
            },
          ]}>
          <VideoPlayer
            source={{
              uri: media?.mediaUrl,
            }}
            isFullscreen={fullScreen}
            onEnterFullscreen={enterFullscreen}
            onExitFullscreen={exitFullscreen}
            navigator={navigation}
            subtitle={subtitle}
            onBack={() => {
              navigation.goBack();
              exitFullscreen();
            }}
          />
        </View>
      </View>
      <StatusBar hidden />
    </>

    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fullscreenVideo: {
    ...StyleSheet.absoluteFill,
    elevation: 1,
  },
  video: {
    elevation: 1,
    paddingVertical: 10,
  },
});

export default CustomPlayer;
