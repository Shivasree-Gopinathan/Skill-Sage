import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native'
import React from 'react'

export default Mentor = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.innercontainer}>
        <View>
          <Text style={styles.headText}>Connect with Mentors</Text>
        </View>
        <View style={styles.mentorbox}>
          <View style={styles.mentor}>
            <Image
              source={require('../assets/mentor5.jpg')}
              style={styles.img}
            />
            <View style={styles.detail}>
              <Text style={styles.text}>David Williams</Text>
              <Text style={styles.text}>+1-7656783654</Text>
              <Text style={styles.text}>California west</Text>
            </View>
          </View>
          <View>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btntext}>Connect</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.mentorbox}>
          <View style={styles.mentor}>
            <Image
              source={require('../assets/mentor6.jpg')}
              style={styles.img}
            />
            <View style={styles.detail}>
              <Text style={styles.text}>Stephen Harling</Text>
              <Text style={styles.text}>+1-7667383654</Text>
              <Text style={styles.text}>California bay area</Text>
            </View>
          </View>
          <View>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btntext}>Connect</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.mentorbox}>
          <View style={styles.mentor}>
            <Image
              source={require('../assets/mentor4.jpg')}
              style={styles.img}
            />
            <View style={styles.detail}>
              <Text style={styles.text}>Jennicy Kriod</Text>
              <Text style={styles.text}>+1-7765787643</Text>
              <Text style={styles.text}>California bay area</Text>
            </View>
          </View>
          <View>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btntext}>Connect</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.mentorbox}>
          <View style={styles.mentor}>
            <Image
              source={require('../assets/mentor1.png')}
              style={styles.img}
            />
            <View style={styles.detail}>
              <Text style={styles.text}>David Williams</Text>
              <Text style={styles.text}>+1-7656783654</Text>
              <Text style={styles.text}>California west</Text>
            </View>
          </View>
          <View>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btntext}>Connect</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.mentorbox}>
          <View style={styles.mentor}>
            <Image
              source={require('../assets/mentor2.png')}
              style={styles.img}
            />
            <View style={styles.detail}>
              <Text style={styles.text}>Stephen Harling</Text>
              <Text style={styles.text}>+1-7667383654</Text>
              <Text style={styles.text}>California bay area</Text>
            </View>
          </View>
          <View>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btntext}>Connect</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.mentorbox}>
          <View style={styles.mentor}>
            <Image
              source={require('../assets/mentor3.png')}
              style={styles.img}
            />
            <View style={styles.detail}>
              <Text style={styles.text}>Jennicy Kriod</Text>
              <Text style={styles.text}>+1-7765787643</Text>
              <Text style={styles.text}>California bay area</Text>
            </View>
          </View>
          <View>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btntext}>Connect</Text>
            </TouchableOpacity>
          </View>
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
  },
  mentorbox: {
    backgroundColor: '#FFF1BF',
    borderRadius: 10,
    paddingBottom: 20,
    marginBottom: 20,
  },
  mentor: {
    flexDirection: 'row',
  },
  detail: {
    marginLeft: 30,
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  img: {
    paddingTop: 0,
    marginVertical: 20,
    marginLeft: 20,
    width: 98,
    height: 98,
    borderRadius: 50,
  },
  headText: {
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: 20,
    marginBottom: 20,
    color: '#006E7F',
    fontSize: 22,
    fontWeight: 500,
  },
  text: {
    marginRight: 20,
    color: '#006E7F',
    fontWeight: 300,
    fontSize: 16,
  },
  btn: {
    backgroundColor: '#FFC700',
    maxWidth: 220,
    padding: 10,
    borderRadius: 8,
    marginLeft: '25%',
  },
  btntext: {
    justifyContent: 'center',
    alignSelf: 'center',
    color: '#006E7F',
    fontWeight: 500,
    fontSize: 16,
  },
})
