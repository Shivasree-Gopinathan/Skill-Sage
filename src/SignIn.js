import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
} from 'react-native'
import React, { useState } from 'react'
import {
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from 'firebase/auth'

import { auth } from './config'

export default function SignIn({ navigation }) {
  const pressHandler = () => navigation.navigate('Home')
  const handleLogin = () => navigation.navigate('Login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState(null)
  const createAccount = async () => {
    try {
      if (password === confirmPassword) {
        await createUserWithEmailAndPassword(auth, email, password)
        navigation.navigate('Login')
      } else {
        setError("Passwords don't match")
      }
    } catch (e) {
      setError('There was a problem creating your account')
      alert(e.message)
    }
  }

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.container}>
        <Image source={require('../assets/Login.png')} style={styles.img} />
        <View>
          <Text style={styles.headText}>Signup</Text>
        </View>
        <View style={styles.innercontainer}>
          <View style={styles.input}>
            <TextInput
              placeholder='Email ID'
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <View style={styles.input}>
            <TextInput
              placeholder='Password'
              value={password}
              onChangeText={setPassword}
            />
          </View>
          <View style={styles.input}>
            <TextInput
              placeholder='Confirm Password'
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
          </View>
          <View style={styles.btn}>
            <Button
              title='Signup'
              color={'#ffc700'}
              onPress={createAccount}
              disabled={!email || !password || !confirmPassword}
            />
          </View>
          <View>
            <Text style={styles.text}>
              Already have an account?{' '}
              <Text style={styles.text1} onPress={handleLogin}>
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
    flex: 1,
    // marginBottom: 150,
  },
  innercontainer: {
    marginHorizontal: 20,
  },
  img: {
    marginTop: -50,
    paddingTop: 0,
  },
  headText: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 20,
    marginBottom: 10,
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
    marginTop: 10,
    marginBottom: 20,
    width: '100%',
  },
})
