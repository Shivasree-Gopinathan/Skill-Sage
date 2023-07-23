import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
} from 'react-native'

export default function Login({ navigation }) {
  const pressHandler = () => navigation.navigate('SkillSage')
  const handleSignin = () => navigation.navigate('SignIn')
  const handleForgot = () => navigation.navigate('ForgotPassword')

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={require('../assets/Welcome.png')} style={styles.img} />
        <Text style={styles.headText}>Welcome to Skill Sage!!</Text>
        <Text style={styles.text}>Find your perfect mentor within clicks</Text>
        <View style={styles.innercontainer}>
          <View style={styles.input}>
            <TextInput placeholder='Email ID' />
          </View>
          <View style={styles.input}>
            <TextInput placeholder='Password' secureTextEntry={true} />
          </View>
          <View>
            <Text style={styles.text1} onPress={handleForgot}>
              Forget Password?
            </Text>
          </View>
          <View style={styles.btn}>
            <Button title='Login' color={'#ffc700'} onPress={pressHandler} />
          </View>
          <View>
            <Text style={styles.text}>
              Don't have an account?{' '}
              <Text style={styles.text1} onPress={handleSignin}>
                SignIn
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
    flex: 1,
  },
  innercontainer: {
    marginHorizontal: 20,
  },
  img: {
    marginTop: 50,
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingTop: 0,
  },
  headText: {
    marginLeft: 'auto',
    marginRight: 'auto',
    color: '#006E7F',
    fontSize: 24,
    fontWeight: 500,
  },
  text: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '20%',
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
  },
})
