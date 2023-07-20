import { Image, StyleSheet, Text, View, ScrollView } from 'react-native'

export default function Home({ navigation }) {
  const pressHandler = () => navigation.navigate('Mentor')
  return (
    <ScrollView style={styles.container}>
      <View style={styles.innercontainer}>
        <View>
          <Text style={styles.headText}>Dashboard</Text>
        </View>
        <View>
          <Text style={styles.text}>
            Analysed outcome based on your survey results to improve your
            insights
          </Text>
        </View>
        <View>
          <Image
            source={require('../assets/dashboard1.png')}
            style={styles.img}
          />
        </View>
        <View>
          <Text style={styles.text1} onPress={pressHandler}>
            Check out your mentors
          </Text>
        </View>
        <View>
          <Image
            source={require('../assets/dashboard2.png')}
            style={styles.img}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  innercontainer: {
    marginHorizontal: 20,
    backgroundColor: '#fff',
  },
  img: {
    paddingTop: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginVertical: 20,
  },
  headText: {
    marginRight: 'auto',
    marginTop: 10,
    marginBottom: 20,
    color: '#006E7F',
    fontSize: 22,
    fontWeight: 500,
  },
  text: {
    marginLeft: 'auto',
    marginRight: 'auto',
    color: '#006E7F',
    fontWeight: 400,
  },
  text1: {
    marginRight: 'auto',
    color: '#006E7F',
    fontSize: 18,
    fontWeight: 300,
    textDecorationLine: 'underline',
  },
  input: {
    marginVertical: 10,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  btn: {
    marginTop: 40,
    marginBottom: 20,
  },
})
