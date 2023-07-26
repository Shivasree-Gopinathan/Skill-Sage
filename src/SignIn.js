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
import { createUserWithEmailAndPassword } from 'firebase/auth'

import { auth } from './config'

export default function SignIn({ navigation }) {
  const pressHandler = () => navigation.navigate('Home')
  const handleLogin = () => navigation.navigate('Login')
  const [email, setEmail] = useState({
    isValidUser: true,
    isValidPassword: true,
  })
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState(null)

  // const isValidEmail = (email) => {
  //   const emailRegex =
  //     /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
  //   return emailRegex.test(email)
  // }
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const isValidPassword = (password) => {
    return password.length >= 6
  }

  const createAccount = async () => {
    try {
      if (isValidEmail(email)) {
        setError('Invalid Email')
        // console.log('Done...e')
      } else if (!isValidPassword(password)) {
        // console.log('Done...pas')
        setError('Password should be at least 6 characters long')
      } else if (password !== confirmPassword) {
        setError("Passwords don't match")
        // console.log('Done...pas1')
      } else {
        await createUserWithEmailAndPassword(auth, email.value, password)
        navigation.navigate('Login')
        // console.log('Done...c')
      }
    } catch (e) {
      setError('There was a problem creating your account')
      alert(e.message)
    }
  }

  const handleEmailChange = (text) => {
    setEmail({
      ...email,
      value: text,
      isValidUser: isValidEmail(text), // Set the correct isValidUser value based on email validation
    })
  }

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.container}>
        <Image source={require('../assets/Login.png')} style={styles.img} />
        <View>
          <Text style={styles.headText}>Sign Up</Text>
        </View>
        <View style={styles.innercontainer}>
          <View style={styles.input}>
            <TextInput
              placeholder='Email ID'
              value={email}
              onChangeText={handleEmailChange}
            />
          </View>

          {!email.isValidUser && email.value.trim() !== '' && (
            <View>
              <Text style={styles.errorMsg}>Invalid Email</Text>
            </View>
          )}

          <View style={styles.input}>
            <TextInput
              placeholder='Password'
              value={password}
              onChangeText={setPassword}
            />
          </View>
          {password.trim() !== '' && !isValidPassword(password) && (
            <View>
              <Text style={styles.errorMsg}>
                Password should be at least 6 characters long
              </Text>
            </View>
          )}
          <View style={styles.input}>
            <TextInput
              placeholder='Confirm Password'
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
          </View>
          {password !== confirmPassword && (
            <View>
              <Text style={styles.errorMsg}>Passwords don't match</Text>
            </View>
          )}
          <View style={styles.btn}>
            <Button
              title='Sign Up'
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
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
})
