import { StyleSheet, Text, View, Button, Image, Linking } from 'react-native'
import React from 'react'

export default function ConnectMentor() {
  const handleConnect1 = () => Linking.openURL('https://teams.microsoft.com')
  const handleConnect2 = () => Linking.openURL('https://outlook.office.com')
  return (
    <View style={styles.container}>
      <Text style={styles.headText}>Connecting to your Mentor</Text>
      <Image source={require('../assets/connect.jpg')} style={styles.img} />
      <View style={styles.btn}>
        <Button
          title='Connect Via Teams'
          color={'#ffc700'}
          onPress={handleConnect1}
        />
      </View>
      <View style={styles.btn}>
        <Button
          title='Connect Via Mail'
          color={'#ffc700'}
          onPress={handleConnect2}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  btn: {
    marginBottom: 20,
    marginLeft: '5%',
    marginRight: '5%',
  },
  img: {
    width: 300,
    height: 300,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  headText: {
    marginLeft: '5%',
    color: '#006E7F',
    fontSize: 30,
    fontWeight: 500,
    marginTop: '25%',
  },
  text: {
    marginLeft: '5%',
    color: '#006E7F',
    fontWeight: 300,
  },
})
