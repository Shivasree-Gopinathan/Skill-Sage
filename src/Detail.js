import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
} from 'react-native'
import React from 'react'
import CoursesApi from '../routes/CoursesApi'

export default Detail = ({ navigation, route }) => {
  const id = route.params.courseId
  // console.log(id)

  const selectedCourse = CoursesApi.find((element) => {
    return id === element.id
  })

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headText}>{selectedCourse.title}</Text>
      <Image
        source={selectedCourse.image}
        resizeMode='contain'
        style={styles.img}
      />
      <View>
        <Text style={styles.subtext}>About Course</Text>
        <Text style={styles.text1} >{selectedCourse.description}</Text>
      </View>
      <Text style={styles.subtext}>Course Content</Text>
      <View style={styles.textcontainer}>
        <TouchableOpacity>
          <Text style={styles.text} onPress={() => {
              Linking.openURL(selectedCourse.link1);
            }}>{selectedCourse.course1}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.textcontainer}>
        <TouchableOpacity>
          <Text style={styles.text} onPress={() => {
              Linking.openURL(selectedCourse.link2);
            }}>{selectedCourse.course2} </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.textcontainer}>
        <TouchableOpacity>
          <Text style={styles.text} onPress={() => {
              Linking.openURL(selectedCourse.link3);
            }}>{selectedCourse.course3} </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    padding: 10,
  },
  img: {
    height: 300,
    width: 300,
    backgroundColor: '#000',
    borderRadius: 200,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  headText: {
    fontSize: 22,
    color: '#006E7F',
    fontWeight: 500,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: 400,
    color: '#ffc700',
    color: '#006E7F',
    // marginTop: 10,
  },
  subtext: {
    fontSize: 18,
    fontWeight: 500,
    color: '#006E7F',
    marginTop: 10,
  },
  textcontainer: {
    backgroundColor: '#d8d8d8',
    backgroundColor: '#FFefb6',
    borderRadius: 5,
    padding: 10,
    marginVertical: 2,
  },
  text1: {
    fontSize: 12,
    color: '#808080',
  },
})
