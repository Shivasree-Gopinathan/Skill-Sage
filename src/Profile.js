import { StyleSheet, Text, View, Image, Button } from 'react-native'

import React from 'react'




export default function Profile({ navigation }) {

  const handleLogout = () => navigation.navigate('Login')

  return (

    <View style={styles.container}>

      <Text style={styles.headtext}>My Account</Text>

      <View style={styles.innercontainer}>

        <View style={styles.inner}>

          <Image source={require('../assets/user.png')} style={styles.img} />

          <Text style={styles.headtext1}>Student</Text>

        </View>

      </View>

      <View style={styles.textlink}>

        <Text style={styles.text}>Account Settings</Text>

        <Text style={styles.text}>Notifications Settings</Text>

        <Text style={styles.text}>About Us</Text>

        <Text style={styles.text1}>Delete Account</Text>

      </View>

      <View style={styles.btn}>

        <Button title='Log Out' color={'#ffc700'} onPress={handleLogout} />

      </View>

    </View>

  )

}




const styles = StyleSheet.create({

  container: {

    backgroundColor: '#fff',

    flex: 1,

  },

  innercontainer: {

    backgroundColor: '#ffc700',

    marginTop: 20,

  },

  headtext: {

    fontSize: 24,

    fontWeight: 500,

    color: '#006e7f',

    marginTop: 20,

    paddingHorizontal: '5%',

  },

  headtext1: {

    fontSize: 24,

    fontWeight: 500,

    color: '#006e7f',

    marginTop: 10,

    marginBottom: '5%',

    marginLeft: '33%',

  },

  img: {

    marginLeft: 'auto',

    marginRight: 'auto',

    marginTop: '5%',

    width: 150,

    height: 150,

  },

  btn: {

    marginTop: 20,

    marginBottom: 20,

    paddingHorizontal: '5%',

  },

  text: {

    fontSize: 16,

    fontWeight: 500,

    color: '#006e7f',

    marginVertical: 10,

    paddingHorizontal: '5%',

  },

  text1: {

    color: '#E13535',

    fontSize: 16,

    fontWeight: 500,

    marginVertical: 5,

    paddingHorizontal: '5%',

  },

  textlink: {

    marginVertical: 40,

  },

})