import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React from 'react'
import courses from '../routes/CoursesApi'
const Search = ({ data, input, setInput }) => {
  return (
    <View>
      <FlatList
        data={courses}
        renderItem={(item) => {
          if (input === '') {
            return (
              <View style={styles.mainContainer}>
                <View style={styles.listContainer}>
                  <Image
                    source={item.item.image}
                    resizeMode='contain'
                    style={styles.img}
                  />
                  <Text
                    style={styles.text}
                    onPress={() =>
                      navigation.navigate('Detail', {
                        courseId: item.item.id,
                      })
                    }
                  >
                    {item.item.title}
                  </Text>
                </View>
              </View>
            )
          }
          if (item.item.title.toLowerCase().includes(input.toLowerCase())) {
            return (
              <View style={styles.mainContainer}>
                <View style={styles.listContainer}>
                  <Image
                    source={item.item.image}
                    resizeMode='contain'
                    style={styles.img}
                  />
                  <Text
                    style={styles.text}
                    onPress={() =>
                      navigation.navigate('Detail', { courseId: item.item.id })
                    }
                  >
                    {item.item.title}
                  </Text>
                </View>
              </View>
            )
          }
        }}
      />
    </View>
  )
}

export default Search

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
  img: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
    borderRadius: 8,
    borderColor: '#ffc700',
    borderWidth: 3,
  },
  text: {
    color: '#fff',
    fontSize: 18,
    marginTop: -40,
    fontStyle: 'italic',
    textDecorationLine: 'underline',
  },
})
