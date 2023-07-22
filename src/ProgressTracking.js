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
  