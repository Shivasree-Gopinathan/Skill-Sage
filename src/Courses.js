import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native'
import React from 'react'

export default function Courses() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.listContainer}>
          <Image
            source={require('../assets/course1.png')}
            style={{ width: '100%', height: 200 }}
          />
          <Text style={styles.text}>Software Engineering</Text>
        </View>
        <View style={styles.separator}></View>
        <View style={styles.listContainer}>
          <Image
            source={require('../assets/course2.jpg')}
            style={{ width: '100%', height: 200 }}
          />
          <Text style={styles.text}>Artificial Intelligence</Text>
        </View>
        <View style={styles.separator}></View>
        <View style={styles.listContainer}>
          <Image
            source={require('../assets/course3.jpg')}
            style={{ width: '100%', height: 200 }}
          />
          <Text style={styles.text}>Machine Learning</Text>
        </View>
        <View style={styles.separator}></View>
        <View style={styles.listContainer}>
          <Image
            source={require('../assets/course4.jpg')}
            style={{ width: '100%', height: 200 }}
          />
          <Text style={styles.text}>Data Structure and Algorithm</Text>
        </View>
        <View style={styles.separator}></View>
        <View style={styles.listContainer}>
          <Image
            source={require('../assets/course5.png')}
            style={{ width: '100%', height: 200 }}
          />
          <Text style={styles.text}>HTML Course</Text>
        </View>
        <View style={styles.separator}></View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: '#006e7f',
    marginHorizontal: 16,
    marginVertical: 10,
    borderRadius: 6,
    paddingBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  separator: {
    height: 2,
    backgroundColor: '#ccc',
    marginHorizontal: 18,
  },
  img: {
    borderTopEndRadius: 6,
    borderRadius: 6,
    height: '80%',
    width: '100%',
  },
  text: {
    color: '#fff',
    fontSize: 18,
    paddingTop: 10,
    fontStyle: 'italic',
  },
})
