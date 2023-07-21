import { Image, StyleSheet, Text, View, TextInput, Button } from 'react-native'

export default function ForgotPassword({ navigation }) {
  const pressHandler1 = () => navigation.navigate('ResetPassword')
  const handleLogin = () => navigation.navigate('Login')

  return (
    
    <View style={styles.container}>
      <Image source={require('../assets/ForgotPassword.png')} style={styles.img} />
      <View>
        <Text style={styles.headText}>Forgot Password</Text>
      </View>
      <View style={styles.innercontainer}>
        <View style={styles.input}>
          <TextInput placeholder='Email ID' />
        </View>
        {/* <View style={styles.input}>
          <TextInput placeholder='Password' secureTextEntry={true} />
        </View>
        <View>
          <Text style={styles.text1}>Forget Password?</Text>
        </View> */}
        <View style={styles.btn}>
          <Button title='Reset' color={'#ffc700'} onPress={pressHandler1} />
        </View>
        <View>
          <Text style={styles.text}>
            {' '}
            <Text style={styles.text1} onPress={handleLogin}>
              Back to Login
            </Text>
          </Text>
        </View>
      </View>
    </View>
    
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex:1,
  },
  innercontainer: {
    marginHorizontal: 30,
  },
  img: {
    marginTop: 50,
    paddingTop: -50,
    marginLeft:"auto", 
    marginRight:"auto",
    height :300,
    width:300,
  },
  headText: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 25,
    marginBottom: 30,
    color: '#006E7F',
    fontSize: 50,
    fontWeight: 500,
  },
  text: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 30,
    color: '#006E7F',
    fontWeight: 700,
  },
  text1: {
    marginLeft: 'auto',
    color: '#006E7F',
    fontWeight: 300,
    textDecorationLine: 'underline',
    paddingTop: 15,
  },
  input: {
    marginVertical: 10,
    padding: 15,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  btn: {
    marginTop: 40,
    marginBottom: 20,
  },
})
