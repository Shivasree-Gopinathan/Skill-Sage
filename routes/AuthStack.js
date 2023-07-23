import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../src/Home'
import Mentor from '../src/Mentor'
import Login from '../src/Login'
import SignIn from '../src/SignIn'
import ForgotPassword from '../src/ForgotPassword'
import Tabnav from '../routes/Tabnavigation'
import Resetpassword from '../src/Resetpassword'
import Cpage from '../src/Cpage'
import Detail from '../src/Detail'
import ConnectMentor from '../src/ConnectMentor'

const Stack = createNativeStackNavigator()

export default function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        title: null,
        headerStyle: { elevation: 0 },
      }}
    >
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='SignIn' component={SignIn} />
      <Stack.Screen name='SkillSage' component={(Home, Tabnav)} />
      <Stack.Screen name='Mentor' component={Mentor} />
      <Stack.Screen name='ForgotPassword' component={ForgotPassword} />
      <Stack.Screen name='ResetPassword' component={Resetpassword} />
      <Stack.Screen name='Cpage' component={Cpage} />
      <Stack.Screen name='Detail' component={Detail} />
      <Stack.Screen name='Connect' component={ConnectMentor}/>
    </Stack.Navigator>
  )
}
