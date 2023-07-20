import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../src/Home'
import Mentor from '../src/Mentor'
import Login from '../src/Login'
import SignIn from '../src/SignIn'
import ForgotPassword from '../src/ForgotPassword'

const Stack = createNativeStackNavigator()

export default function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='SignIn' component={SignIn} />
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Mentor' component={Mentor} />
      <Stack.Screen name='ForgotPassword' component={ForgotPassword} />
    </Stack.Navigator>
  )
}