import React,{useState} from "react";
import{ScrollView,View,Text,Statusbar, Dimensions, Image} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";

const image=[
  'https://img.freepik.com/free-vector/flat-university-concept_23-2148176380.jpg?w=1380&t=st=1689970064~exp=1689970664~hmac=5a5ae5faea445eed8af2a3fd7b79d2f52b50daea16b303189bc25ab3f3181e7d',
  'https://img.freepik.com/free-vector/woman-giving-comfort-support-friend_74855-5301.jpg?w=2000&t=st=1689970253~exp=1689970853~hmac=6e688d396fdbb60dc9f7b43fbc4aeb8426ebe3d10445b56248812be57bff1116',
  'https://img.freepik.com/free-vector/family-couple-saving-money_74855-5240.jpg?w=2000&t=st=1689970407~exp=1689971007~hmac=848db56e3fdfdb3cd77e158fdb182b941997eb7f582b9ec6cdfac9c239aed56d',
]

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
export default function Cpage () {
  const [imagActive, setimgActive] = useState(0);

  onchange = (nativeEvent) => {
      if(nativeEvent){
        const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
        if(slide != imagActive) {
          setimgActive(slide);
        }
      }
  }
  return (
   <SafeAreaView style={styles.container}>
    <View style={styles.wrap}>
      <ScrollView onScroll={({nativeEvent}) => onchange(nativeEvent)}
        showsHorizontalScrollIndicator = {false}
        pagingEnabled
        horizontal
        style={styles.wrap}>
          {
          image.map((e, index) => 
          <Image
          Key={e}
          resizeMode='stretch'
          style={styles.wrap}
          source={{uri: e}}>
              

          </Image>)
          }
        
      </ScrollView>
      <View style={styles.wrapDot}>
          {
            image.map((e, index) => 
            <Text
              key= {e}
              style={imagActive == index ? styles.dotActive : styles.dot}>
              ●

            </Text>)
          }
      </View>
    </View>
   </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  wrap:{
    width:WIDTH,
    height: HEIGHT * 0.75
  },
  wrapDot:{
    position : "absolute",
    bottom: 0,
    flexDirection:'row',
    alignSelf:'center'

  },
  dotActive :{
    margin: 3,
    color:'black'
  },
  dot:{
    margin: 3,
    color: 'white'
  }
});
