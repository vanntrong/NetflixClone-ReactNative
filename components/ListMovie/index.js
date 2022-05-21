import {View, Text, FlatList} from 'react-native';
import React from 'react';
import styles from './styles';
import Movie from './Movie/index';

const data = [
  {
    image:
      'https://s3-alpha-sig.figma.com/img/e3c3/c4f8/6f41f8284575cb530863cac30d82b28e?Expires=1653868800&Signature=dW7Q6l931M9Vkkc~ZSKcGR0quggVDUIeZo4Iuw5x2uiUoxEAniZmDN5d2twqMpIO0N4ROVVTzN0KS1kPhsuOjeaq~CP9f5k0KJJEYmwfXFWjxZ6tq~N0Ab~gKfE4KNeUKYgmlxFBug8owVT-wcxYaJm4y1CTgfnJbgTSRWu9LtL69-nu9dehvzD9xK-42TMdgfm-zgcSYaO8~R9z4LtVCwDi4NRfo~WtKIdF~lrT10H6Q9S9vPGHwiA90G4AfysXaVB4yv1ej7HDMaLqpzOXoq6oCkIQGUBaJ69CMkvQnqoBbKCEBQwq9btRKDGlx6uz4Nh37joAp9cDwe~KY6w6DQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  },
  {
    image:
      'https://s3-alpha-sig.figma.com/img/e3c3/c4f8/6f41f8284575cb530863cac30d82b28e?Expires=1653868800&Signature=dW7Q6l931M9Vkkc~ZSKcGR0quggVDUIeZo4Iuw5x2uiUoxEAniZmDN5d2twqMpIO0N4ROVVTzN0KS1kPhsuOjeaq~CP9f5k0KJJEYmwfXFWjxZ6tq~N0Ab~gKfE4KNeUKYgmlxFBug8owVT-wcxYaJm4y1CTgfnJbgTSRWu9LtL69-nu9dehvzD9xK-42TMdgfm-zgcSYaO8~R9z4LtVCwDi4NRfo~WtKIdF~lrT10H6Q9S9vPGHwiA90G4AfysXaVB4yv1ej7HDMaLqpzOXoq6oCkIQGUBaJ69CMkvQnqoBbKCEBQwq9btRKDGlx6uz4Nh37joAp9cDwe~KY6w6DQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  },
  {
    image:
      'https://s3-alpha-sig.figma.com/img/e3c3/c4f8/6f41f8284575cb530863cac30d82b28e?Expires=1653868800&Signature=dW7Q6l931M9Vkkc~ZSKcGR0quggVDUIeZo4Iuw5x2uiUoxEAniZmDN5d2twqMpIO0N4ROVVTzN0KS1kPhsuOjeaq~CP9f5k0KJJEYmwfXFWjxZ6tq~N0Ab~gKfE4KNeUKYgmlxFBug8owVT-wcxYaJm4y1CTgfnJbgTSRWu9LtL69-nu9dehvzD9xK-42TMdgfm-zgcSYaO8~R9z4LtVCwDi4NRfo~WtKIdF~lrT10H6Q9S9vPGHwiA90G4AfysXaVB4yv1ej7HDMaLqpzOXoq6oCkIQGUBaJ69CMkvQnqoBbKCEBQwq9btRKDGlx6uz4Nh37joAp9cDwe~KY6w6DQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  },
  {
    image:
      'https://s3-alpha-sig.figma.com/img/e3c3/c4f8/6f41f8284575cb530863cac30d82b28e?Expires=1653868800&Signature=dW7Q6l931M9Vkkc~ZSKcGR0quggVDUIeZo4Iuw5x2uiUoxEAniZmDN5d2twqMpIO0N4ROVVTzN0KS1kPhsuOjeaq~CP9f5k0KJJEYmwfXFWjxZ6tq~N0Ab~gKfE4KNeUKYgmlxFBug8owVT-wcxYaJm4y1CTgfnJbgTSRWu9LtL69-nu9dehvzD9xK-42TMdgfm-zgcSYaO8~R9z4LtVCwDi4NRfo~WtKIdF~lrT10H6Q9S9vPGHwiA90G4AfysXaVB4yv1ej7HDMaLqpzOXoq6oCkIQGUBaJ69CMkvQnqoBbKCEBQwq9btRKDGlx6uz4Nh37joAp9cDwe~KY6w6DQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  },
  {
    image:
      'https://s3-alpha-sig.figma.com/img/e3c3/c4f8/6f41f8284575cb530863cac30d82b28e?Expires=1653868800&Signature=dW7Q6l931M9Vkkc~ZSKcGR0quggVDUIeZo4Iuw5x2uiUoxEAniZmDN5d2twqMpIO0N4ROVVTzN0KS1kPhsuOjeaq~CP9f5k0KJJEYmwfXFWjxZ6tq~N0Ab~gKfE4KNeUKYgmlxFBug8owVT-wcxYaJm4y1CTgfnJbgTSRWu9LtL69-nu9dehvzD9xK-42TMdgfm-zgcSYaO8~R9z4LtVCwDi4NRfo~WtKIdF~lrT10H6Q9S9vPGHwiA90G4AfysXaVB4yv1ej7HDMaLqpzOXoq6oCkIQGUBaJ69CMkvQnqoBbKCEBQwq9btRKDGlx6uz4Nh37joAp9cDwe~KY6w6DQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  },
  {
    image:
      'https://s3-alpha-sig.figma.com/img/e3c3/c4f8/6f41f8284575cb530863cac30d82b28e?Expires=1653868800&Signature=dW7Q6l931M9Vkkc~ZSKcGR0quggVDUIeZo4Iuw5x2uiUoxEAniZmDN5d2twqMpIO0N4ROVVTzN0KS1kPhsuOjeaq~CP9f5k0KJJEYmwfXFWjxZ6tq~N0Ab~gKfE4KNeUKYgmlxFBug8owVT-wcxYaJm4y1CTgfnJbgTSRWu9LtL69-nu9dehvzD9xK-42TMdgfm-zgcSYaO8~R9z4LtVCwDi4NRfo~WtKIdF~lrT10H6Q9S9vPGHwiA90G4AfysXaVB4yv1ej7HDMaLqpzOXoq6oCkIQGUBaJ69CMkvQnqoBbKCEBQwq9btRKDGlx6uz4Nh37joAp9cDwe~KY6w6DQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  },
  {
    image:
      'https://s3-alpha-sig.figma.com/img/e3c3/c4f8/6f41f8284575cb530863cac30d82b28e?Expires=1653868800&Signature=dW7Q6l931M9Vkkc~ZSKcGR0quggVDUIeZo4Iuw5x2uiUoxEAniZmDN5d2twqMpIO0N4ROVVTzN0KS1kPhsuOjeaq~CP9f5k0KJJEYmwfXFWjxZ6tq~N0Ab~gKfE4KNeUKYgmlxFBug8owVT-wcxYaJm4y1CTgfnJbgTSRWu9LtL69-nu9dehvzD9xK-42TMdgfm-zgcSYaO8~R9z4LtVCwDi4NRfo~WtKIdF~lrT10H6Q9S9vPGHwiA90G4AfysXaVB4yv1ej7HDMaLqpzOXoq6oCkIQGUBaJ69CMkvQnqoBbKCEBQwq9btRKDGlx6uz4Nh37joAp9cDwe~KY6w6DQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  },
  {
    image:
      'https://s3-alpha-sig.figma.com/img/e3c3/c4f8/6f41f8284575cb530863cac30d82b28e?Expires=1653868800&Signature=dW7Q6l931M9Vkkc~ZSKcGR0quggVDUIeZo4Iuw5x2uiUoxEAniZmDN5d2twqMpIO0N4ROVVTzN0KS1kPhsuOjeaq~CP9f5k0KJJEYmwfXFWjxZ6tq~N0Ab~gKfE4KNeUKYgmlxFBug8owVT-wcxYaJm4y1CTgfnJbgTSRWu9LtL69-nu9dehvzD9xK-42TMdgfm-zgcSYaO8~R9z4LtVCwDi4NRfo~WtKIdF~lrT10H6Q9S9vPGHwiA90G4AfysXaVB4yv1ej7HDMaLqpzOXoq6oCkIQGUBaJ69CMkvQnqoBbKCEBQwq9btRKDGlx6uz4Nh37joAp9cDwe~KY6w6DQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  },
  {
    image:
      'https://s3-alpha-sig.figma.com/img/e3c3/c4f8/6f41f8284575cb530863cac30d82b28e?Expires=1653868800&Signature=dW7Q6l931M9Vkkc~ZSKcGR0quggVDUIeZo4Iuw5x2uiUoxEAniZmDN5d2twqMpIO0N4ROVVTzN0KS1kPhsuOjeaq~CP9f5k0KJJEYmwfXFWjxZ6tq~N0Ab~gKfE4KNeUKYgmlxFBug8owVT-wcxYaJm4y1CTgfnJbgTSRWu9LtL69-nu9dehvzD9xK-42TMdgfm-zgcSYaO8~R9z4LtVCwDi4NRfo~WtKIdF~lrT10H6Q9S9vPGHwiA90G4AfysXaVB4yv1ej7HDMaLqpzOXoq6oCkIQGUBaJ69CMkvQnqoBbKCEBQwq9btRKDGlx6uz4Nh37joAp9cDwe~KY6w6DQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  },
  {
    image:
      'https://s3-alpha-sig.figma.com/img/e3c3/c4f8/6f41f8284575cb530863cac30d82b28e?Expires=1653868800&Signature=dW7Q6l931M9Vkkc~ZSKcGR0quggVDUIeZo4Iuw5x2uiUoxEAniZmDN5d2twqMpIO0N4ROVVTzN0KS1kPhsuOjeaq~CP9f5k0KJJEYmwfXFWjxZ6tq~N0Ab~gKfE4KNeUKYgmlxFBug8owVT-wcxYaJm4y1CTgfnJbgTSRWu9LtL69-nu9dehvzD9xK-42TMdgfm-zgcSYaO8~R9z4LtVCwDi4NRfo~WtKIdF~lrT10H6Q9S9vPGHwiA90G4AfysXaVB4yv1ej7HDMaLqpzOXoq6oCkIQGUBaJ69CMkvQnqoBbKCEBQwq9btRKDGlx6uz4Nh37joAp9cDwe~KY6w6DQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  },
  {
    image:
      'https://s3-alpha-sig.figma.com/img/e3c3/c4f8/6f41f8284575cb530863cac30d82b28e?Expires=1653868800&Signature=dW7Q6l931M9Vkkc~ZSKcGR0quggVDUIeZo4Iuw5x2uiUoxEAniZmDN5d2twqMpIO0N4ROVVTzN0KS1kPhsuOjeaq~CP9f5k0KJJEYmwfXFWjxZ6tq~N0Ab~gKfE4KNeUKYgmlxFBug8owVT-wcxYaJm4y1CTgfnJbgTSRWu9LtL69-nu9dehvzD9xK-42TMdgfm-zgcSYaO8~R9z4LtVCwDi4NRfo~WtKIdF~lrT10H6Q9S9vPGHwiA90G4AfysXaVB4yv1ej7HDMaLqpzOXoq6oCkIQGUBaJ69CMkvQnqoBbKCEBQwq9btRKDGlx6uz4Nh37joAp9cDwe~KY6w6DQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  },
  {
    image:
      'https://s3-alpha-sig.figma.com/img/e3c3/c4f8/6f41f8284575cb530863cac30d82b28e?Expires=1653868800&Signature=dW7Q6l931M9Vkkc~ZSKcGR0quggVDUIeZo4Iuw5x2uiUoxEAniZmDN5d2twqMpIO0N4ROVVTzN0KS1kPhsuOjeaq~CP9f5k0KJJEYmwfXFWjxZ6tq~N0Ab~gKfE4KNeUKYgmlxFBug8owVT-wcxYaJm4y1CTgfnJbgTSRWu9LtL69-nu9dehvzD9xK-42TMdgfm-zgcSYaO8~R9z4LtVCwDi4NRfo~WtKIdF~lrT10H6Q9S9vPGHwiA90G4AfysXaVB4yv1ej7HDMaLqpzOXoq6oCkIQGUBaJ69CMkvQnqoBbKCEBQwq9btRKDGlx6uz4Nh37joAp9cDwe~KY6w6DQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  },
];

const ListMovie = ({handlePresentModalPress, data}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.listTitle}>{data.homeSectionName}</Text>
      <View style={styles.listWrapper}>
        <FlatList
          data={data?.recommendContentVOList}
          renderItem={({item, index}) => (
            <Movie
              data={item}
              style={{marginLeft: index === 0 ? 17 : 0}}
              handlePresentModalPress={handlePresentModalPress}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          initialNumToRender={data.recommendContentVOList?.length || 30}
        />
      </View>
    </View>
  );
};

export default ListMovie;
