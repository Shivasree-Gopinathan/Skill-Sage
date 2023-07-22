import React, { useState } from "react";
import { ScrollView, View, Text, StatusBar, Dimensions, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

const image = [
  'https://img.freepik.com/free-vector/flat-university-concept_23-2148176380.jpg?w=1380&t=st=1689970064~exp=1689970664~hmac=5a5ae5faea445eed8af2a3fd7b79d2f52b50daea16b303189bc25ab3f3181e7d',
  'https://img.freepik.com/free-vector/woman-giving-comfort-support-friend_74855-5301.jpg?w=2000&t=st=1689970253~exp=1689970853~hmac=6e688d396fdbb60dc9f7b43fbc4aeb8426ebe3d10445b56248812be57bff1116',
  'https://img.freepik.com/free-vector/family-couple-saving-money_74855-5240.jpg?w=2000&t=st=1689970407~exp=1689971007~hmac=848db56e3fdfdb3cd77e158fdb182b941997eb7f582b9ec6cdfac9c239aed56d',
];

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default function Cpage() {
  const [imgActive, setImgActive] = useState(0);

  const onChange = (nativeEvent) => {
    if (nativeEvent) {
      const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
      if (slide !== imgActive) {
        setImgActive(slide);
      }
    }
  }

  const handleImageClick = (index) => {
    
    console.log("Image clicked: ", index);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrap}>
        <ScrollView
          onScroll={({ nativeEvent }) => onChange(nativeEvent)}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
          style={styles.wrap}>
          {image.map((e, index) => (
            <TouchableOpacity key={e} onPress={() => handleImageClick(index)}>
              <Image
                resizeMode='stretch'
                style={styles.image}
                source={{ uri: e }}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
        <View style={styles.wrapDot}>
          {image.map((e, index) => (
            <Text
              key={e}
              style={imgActive === index ? styles.dotActive : styles.dot}
            >
              ●
            </Text>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'darkblue',
    flex: 1
  },
  wrap: {
    width: WIDTH,
    height: HEIGHT * 0.75
  },
  image: {
    width: WIDTH,
    height: HEIGHT * 0.75
  },
  wrapDot: {
    position: "absolute",
    bottom: 0,
    flexDirection: 'row',
    alignSelf: 'center'
  },
  dotActive: {
    margin: 3,
    color: 'black'
  },
  dot: {
    margin: 3,
    color: '#ccc'
  }
});
