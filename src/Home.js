import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Gif,
} from 'react-native'

export default function Home({ navigation }) {
  const pressHandler = () => navigation.navigate('Mentor')
  const pressHandler1 = () => navigation.navigate('Cpage')
  return (
    <ScrollView style={styles.container}>
      <View style={styles.innercontainer}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Image
            source={require('../assets/hello.png')}
            style={{ width: 50, height: 50, marginLeft: '-5%' }}
          />
          <Text style={styles.headText}>Welcome</Text>
        </View>
        {/* Find Mentor */}
        <TouchableOpacity onPress={pressHandler} style={styles.cardbox}>
          <View style={styles.card}>
            <Text style={styles.cardText}>Check Out Your Mentors</Text>
            <View>
              <Text style={styles.text}>
                Check out your mentor's profile for a transformative learning
                experience
              </Text>
            </View>
            <View>
              <Image
                source={require('../assets/findmentor.jpg')}
                style={styles.img2}
              />
            </View>
          </View>
        </TouchableOpacity>
        {/* Join community */}
        <TouchableOpacity onPress={pressHandler1} style={styles.cardbox}>
          <View style={styles.card}>
            <Text style={styles.cardText}>Join Community</Text>
            <View>
              <Text style={styles.text}>
                Join our thriving community, where you belong and connections
                flourish
              </Text>
            </View>
            <View>
              <Image
                source={require('../assets/joincommunity.jpg')}
                style={styles.img2}
              />
            </View>
          </View>
        </TouchableOpacity>
        {/* Analyze Course */}
        <TouchableOpacity style={styles.cardbox}>
          <View style={styles.card}>
            <Text style={styles.cardText}>Analyze Course</Text>
            <View>
              <Text style={styles.text}>
                Analysed outcome based on your survey results to improve your
                insights
              </Text>
            </View>
            <View>
              <Image
                source={require('../assets/analyzecourse.jpg')}
                style={styles.img2}
              />
            </View>
          </View>
        </TouchableOpacity>
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
    width: '100%',
    height: 300,
    borderRadius: 100,
  },
  cardbox: {
    marginVertical: 10,
  },
  card: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#006e7f',
    backgroundColor: '#ffc700',
    backgroundColor: '#006e7f',
    padding: 10,
  },
  cardText: {
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: 24,
    fontWeight: 400,
    color: '#006E7F',
    color: '#ffc700',
    marginVertical: 25,
  },
  card: {
    borderRadius: 10,
    borderWidth: 1,
    // borderColor: '#006e7f',
    borderColor: '#ffc700',
    // backgroundColor: '#ffc700',
    backgroundColor: '#006e7f',
    padding: 10,
  },
  cardText: {
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: 24,
    fontWeight: 400,
    // color: '#006E7F',
    color: '#ffc700',
    marginVertical: 5,
  },
  headText: {
    marginRight: 'auto',
    marginTop: 10,
    marginBottom: 10,
    color: '#006E7F',
    fontSize: 26,
    fontWeight: 500,
    // fontStyle:'italic',
  },
  text: {
    justifyContent: 'center',
    alignSelf: 'center',
    // color: '#006E7F',
    color: '#ffc700',
    fontWeight: 400,
    fontSize: 12,
    marginBottom: 10,
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
