import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { View, Text, Image } from 'react-native'
import home from '../assets/home.png'
import search from '../assets/search.png'
import fav from '../assets/favourite.png'
import base from '../src/Home'
import like from '../src/Favourite'
import look from '../src/Search'

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
        name='main'
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
          tabBarLabel: 'Search',
          tabBarIcon: ({ color, size }) => (
            <Image
              source={search}
              style={{
                width: 35,
                height: 35,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Favourite Courses'
        component={like}
        options={{
          tabBarLabel: 'Favourites',
          tabBarIcon: ({ color, size }) => (
            <Image
              source={fav}
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
