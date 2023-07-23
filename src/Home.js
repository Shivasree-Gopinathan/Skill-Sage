import { Image, StyleSheet, Text, View, ScrollView } from 'react-native'

export default function Home({ navigation }) {
  const pressHandler = () => navigation.navigate('Mentor')
  const pressHandler1 = () => navigation.navigate('Cpage')
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
        <View style={styles.card}>
          <Text style={styles.cardText} onPress={pressHandler}>
            Check out your mentors
          </Text>
          <View>
            <Image
              source={require('../assets/findmentor.jpg')}
              style={styles.img2}
            />
          </View>
        </View>
        <View>
          <Text style={styles.text1} onPress={pressHandler1}>
            Join the community
          </Text>
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
  img2: {
    paddingTop: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
    // marginVertical: 20,
    width: '100%',
    height: 300,
    borderRadius: 100,
    // borderBottomLeftRadius: 10,
    // borderBottomRightRadius: 10,
  },
  card: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#006e7f',
    padding: 10,
  },
  cardText: {
    marginLeft: 'auto',
    marginRight: 'auto',
    color: '#006E7F',
    fontSize: 20,
    fontWeight: 300,
    // textDecorationLine: 'underline',
    color: '#ffc700',
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
