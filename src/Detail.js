import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
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
      <Text>Detail</Text>
      <View>
        <View style={styles.listContainer}>
          <Image
            source={selectedCourse.image}
            resizeMode='contain'
            style={styles.img}
          />
          <Text
            style={styles.text}
            onPress={() =>
              navigation.navigate('Detail', { courseId: selectedCourse.id })
            }
          >
            {selectedCourse.title}
          </Text>
        </View>
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
    width: '90%',
    // aspectRatio: 1,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
})
