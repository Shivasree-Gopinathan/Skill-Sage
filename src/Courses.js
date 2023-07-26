import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
} from 'react-native'
import React, { useState } from 'react'
import courses from '../routes/CoursesApi'
import Search from './Search'

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

  const [input, setInput] = useState('')
  // console.log(input)
  return (
    <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>
      <View>
        <ScrollView>
          <View style={{ marginTop: 20, marginHorizontal: '5%' }}>
            <TextInput
              placeholder='Search courses'
              style={styles.searchbox}
              value={input}
              onChangeText={(text) => setInput(text)}
            />
          </View>
          <Search data={courses} input={input} setInput={setInput} />
          {/* <FlatList
        keyExtractor={(item) => item.id}
        data={courses}
        renderItem={courseCard}
      /> */}
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 20,
  },
  listContainer: {
    backgroundColor: '#006e7f',
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
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
    borderRadius: 8,
  },
  text: {
    color: '#fff',
    fontSize: 18,
    marginTop: -40,
    fontStyle: 'italic',
    textDecorationLine: 'underline',
  },
  searchbox: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  // btn: {
  //   marginTop: 30,
  //   marginBottom: 10,
  //   maxWidth: 250,
  // },
})
