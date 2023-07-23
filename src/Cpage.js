import { Linking } from 'react-native';
import React, { useState } from "react";
import { ScrollView, View, Text, StatusBar, Dimensions, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

const image = [
  'https://img.freepik.com/free-vector/hand-drawn-people-starting-business-project_23-2148843028.jpg?w=2000&t=st=1690140869~exp=1690141469~hmac=022e4e8c921cda03edb77f0f8c7a37daa095f0ba056dec6efb64c062b68be88b',
  'https://img.freepik.com/free-vector/woman-giving-comfort-support-friend_74855-5301.jpg?w=2000&t=st=1689970253~exp=1689970853~hmac=6e688d396fdbb60dc9f7b43fbc4aeb8426ebe3d10445b56248812be57bff1116',
  'https://img.freepik.com/free-vector/family-couple-saving-money_74855-5240.jpg?w=2000&t=st=1689970407~exp=1689971007~hmac=848db56e3fdfdb3cd77e158fdb182b941997eb7f582b9ec6cdfac9c239aed56d',
];

const imageUrls = [
  'https://www.uwindsor.ca/openlearning/298/about-us',
  'https://windsoressex.cmha.ca',
  'https://debt.canadadebtfree.ca/canada-debt-free/?gad=1&gclid=EAIaIQobChMI8quC2JOjgAMVsQxlCh2eIg-xEAAYASAAEgIYyPD_BwE',
];

const imageTexts = [
  'Education Community',
  'Mental Health',
  'Finanacial Help',
];
const paragraphs = [
  '"Educate, Elevate, Empower!"',
  '"Nurturing Minds, Healing Hearts."',
  '"Building Brighter Futures, Together."',
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

  /* ß */

  const handleImageClick = (index) => {
    if (index >= 0 && index < imageUrls.length) {
      const url = imageUrls[index];
      Linking.openURL(url)
        .catch((error) => console.error("Error opening URL: ", error));
    } else {
      console.warn("Invalid index or URL not defined.");
    }
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
              <View style={styles.overlay}>
              <Text style={styles.imageText}>{imageTexts[index]}</Text>
              <Text style={styles.paragraph}>{paragraphs[index]}</Text>
              </View>
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
    backgroundColor: '#ffd338',
    //ffd338 ffe999 fff1bf
    flex: 1
  },
  wrap: {
    width: WIDTH ,
    height: HEIGHT * 0.75,
    position: 'relative',
  },
  image: {
    borderRadius: 150,
    width: WIDTH ,
    height: HEIGHT * 0.65,
  },
  wrapDot: {
    position: "absolute",
    bottom: 90,
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
  },
  overlay: {
    position: 'absolute',
    bottom: -1, 
    left: 20, 
    right: 20, 
  },
  imageText: {
    alignSelf: 'center',
    color: 'red',
    fontSize: 35,
    marginBottom: 10,
    textAlign: 'center',
  },
  paragraph: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
  
  scrollViewContent: {
    alignItems: 'center', 
  },
});
