import { Image, StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native'

export default function SignIn({ navigation }) {
  const pressHandler = () => navigation.navigate('Home')
  const handleSignin = () => navigation.navigate('SignIn')

  return (
 <ScrollView>
    <View style={styles.container}>
      <Image source={require('../assets/Login.png')} style={styles.img} />
      <View>
        <Text style={styles.headText}>Signup</Text>
      </View>
      <View style={styles.innercontainer}>
        <View style={styles.input}>
          <TextInput placeholder='Username' />
        </View>
        <View style={styles.input}>
          <TextInput placeholder='Email ID' />
        </View>
        <View style={styles.input}>
          <TextInput placeholder='Password' />
        </View>
        <View style={styles.input}>
          <TextInput placeholder='Confirm Password' />
        </View>
        <View style={styles.btn}>
          <Button title='Signup' color={'#ffc700'} onPress={pressHandler} />
        </View>
        <View>
          <Text style={styles.text}>
            Have an account?{' '}
            <Text style={styles.text1} onPress={handleSignin}>
              Login
            </Text>
          </Text>
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
  img: {
    marginTop: -10,
    paddingTop: 0,
  },
  headText: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 20,
    marginBottom: 50,
    color: '#006E7F',
    fontSize: 24,
    fontWeight: 500,
  },
  text: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 30,
    color: '#006E7F',
    fontWeight: 300,
  },
  text1: {
    marginLeft: 'auto',
    color: '#006E7F',
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
    // padding: 10,
  },
})