import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
} from 'react-native'
import React from 'react'
import courses from '../routes/CoursesApi'

export default function Courses({ navigation }) {
  const courseCard = ({ item }) => {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.listContainer}>
          <Image source={item.image} resizeMode='contain' style={styles.img} />
          <Text
            style={styles.text}
            onPress={() => navigation.navigate('Detail', { courseId: item.id })}
          >
            {item.title}
          </Text>
        </View>
      </View>
    )
  }
  return (
    <FlatList
      keyExtractor={(item) => item.id}
      data={courses}
      renderItem={courseCard}
    />
    // <SafeAreaView>
    //   <ScrollView>
    //     <View style={styles.listContainer}>
    //       <Image
    //         source={require('../assets/course1.png')}
    //         style={{ width: '100%', height: 200 }}
    //       />
    //       <Text style={styles.text}>Software Engineering</Text>
    //     </View>
    //     <View style={styles.separator}></View>
    //     <View style={styles.listContainer}>
    //       <Image
    //         source={require('../assets/course2.jpg')}
    //         style={{ width: '100%', height: 200 }}
    //       />
    //       <Text style={styles.text}>Artificial Intelligence</Text>
    //     </View>
    //     <View style={styles.separator}></View>
    //     <View style={styles.listContainer}>
    //       <Image
    //         source={require('../assets/course3.jpg')}
    //         style={{ width: '100%', height: 200 }}
    //       />
    //       <Text style={styles.text}>Machine Learning</Text>
    //     </View>
    //     <View style={styles.separator}></View>
    //     <View style={styles.listContainer}>
    //       <Image
    //         source={require('../assets/course4.jpg')}
    //         style={{ width: '100%', height: 200 }}
    //       />
    //       <Text style={styles.text}>Data Structure and Algorithm</Text>
    //     </View>
    //     <View style={styles.separator}></View>
    //     <View style={styles.listContainer}>
    //       <Image
    //         source={require('../assets/course5.png')}
    //         style={{ width: '100%', height: 200 }}
    //       />
    //       <Text style={styles.text}>HTML Course</Text>
    //     </View>
    //     <View style={styles.separator}></View>
    //   </ScrollView>
    // </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 20,
    // paddingVertical: 10,
  },
  listContainer: {
    backgroundColor: '#006e7f',
    backgroundColor: 'rgba(225,225,225,0.9)',
    // marginHorizontal: 16,
    marginVertical: 30,
    // borderRadius: 6,
    // paddingBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 8,
  },
  separator: {
    height: 2,
    backgroundColor: '#ccc',
    marginHorizontal: 18,
  },
  img: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
    marginTop: -40,
  },
  text: {
    color: '#fff',
    fontSize: 18,
    marginTop: -40,
    // fontStyle: 'italic',
  },
})
