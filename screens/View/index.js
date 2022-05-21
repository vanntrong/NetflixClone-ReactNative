import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';

import styles from './styles';
import CustomPlayer from '../../components/VideoPlayer';
import {getDetailApi} from '../../api/homeApi';

const ViewScreen = ({route}) => {
  const {data, shouldLoad} = route.params;
  const [movieData, setMovieData] = useState(null);
  const [currentEpisode, setCurrentEpisode] = useState(null);
  const [definition, setDefinition] = useState(null);
  const [subtitle, setSubtitle] = useState(null);

  useEffect(() => {
    const getDetail = async () => {
      const res = await getDetailApi(data.id, data.category);
      setMovieData(res);
      setCurrentEpisode(res.episodeVo[0]);
    };
    if (shouldLoad) {
      getDetail();
    } else {
      setMovieData(data);
    }
  }, [shouldLoad]);

  useEffect(() => {
    if (data.episodeVo) {
      setCurrentEpisode(data.episodeVo[0]);
    }
  }, [data]);

  useEffect(() => {
    setDefinition(currentEpisode?.definitionList[0].code);
    setSubtitle(
      currentEpisode?.subtitlingList.find(
        item => item && item.languageAbbr === 'vi',
      )?.subtitlingUrl,
    );
  }, [currentEpisode]);

  return (
    <View style={styles.container}>
      <ScrollView>
        {movieData && (
          <CustomPlayer
            category={movieData.category}
            contentId={movieData.id}
            episodeId={currentEpisode?.id}
            definition={definition}
            subtitle={subtitle}
          />
        )}
        {movieData && (
          <View style={styles.infoMovieWrapper}>
            <Text style={styles.infoMovieTitle}>{movieData.name}</Text>
            <Text style={styles.infoMovieIntro}>{movieData.introduction}</Text>

            <View style={styles.infoMovieTagsWrapper}>
              <Text style={styles.infoMovieTagsTitle}>Thể loại:</Text>
              {movieData.tagNameList?.map((item, index) => (
                <Text
                  style={styles.infoMovieTagsText}
                  key={(index + Math.random()).toString()}>
                  {item}
                </Text>
              ))}
            </View>

            <Text style={styles.episodesWrapperTitle}>Danh sách tập</Text>
            <View style={styles.episodesWrapper}>
              {movieData.episodeVo?.map((item, index) => (
                <TouchableOpacity
                  key={item.id}
                  onPress={() => setCurrentEpisode(item)}>
                  <View
                    style={[
                      styles.episodeItem,
                      {
                        backgroundColor:
                          currentEpisode?.id === item.id ? 'red' : '#343a40',
                      },
                    ]}>
                    <Text style={styles.episodeItemText}>Tập {index + 1}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default ViewScreen;
