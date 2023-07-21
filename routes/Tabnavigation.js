import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Image } from 'react-native'
import home from '../assets/home.png'
import course from '../assets/course.png'
import profile from '../assets/profile.png'
import base from '../src/Home'
import like from '../src/Favourite'
import look from '../src/Courses'

const Tab = createBottomTabNavigator()

export default function Tabnavigation() {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name='home'
        component={base}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Image
              source={home}
              style={{
                width: 35,
                height: 35,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Search Course'
        component={look}
        options={{
          tabBarLabel: 'Search Course',
          tabBarIcon: ({ color, size }) => (
            <Image
              source={course}
              style={{
                width: 35,
                height: 35,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Profile'
        component={like}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Image
              source={profile}
              style={{
                width: 35,
                height: 35,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
