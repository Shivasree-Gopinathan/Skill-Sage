import { View, Text, StyleSheet, Button, Linking } from 'react-native'
import React from 'react'

export default function Resetpassword() {
  const pressHandler = () => Linking.openURL('https://accounts.google.com')

  return (
    <View style={styles.container}>
      <Text style={styles.headText}>Check your</Text>
      <Text style={styles.headText}>mail</Text>
      <View>
        <Text style={styles.text}>
          We have sent a reset password reset to your email address.
        </Text>
        <View style={styles.btn}>
          <Button title='Go to mail' color={'#ffc700'} onPress={pressHandler} />
        </View>
        <Text style={styles.text}>
          Try to Login again? <Text style={styles.text1}>Login</Text>
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  headText: {
    marginLeft: '5%',
    color: '#006E7F',
    fontSize: 36,
    fontWeight: 500,
  },
  text: {
    marginLeft: '5%',
    color: '#006E7F',
    fontWeight: 300,
  },
  text1: {
    marginLeft: 'auto',
    color: '#006E7F',
    fontWeight: 300,
    textDecorationLine: 'underline',
  },
  btn: {
    marginTop: 40,
    marginBottom: 20,
    marginLeft: '5%',
    marginRight: '5%',
  },
})
