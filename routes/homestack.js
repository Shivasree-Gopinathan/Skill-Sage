import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Home from '../src/Home'
import Login from '../src/Login'
import Mentor from '../src/Mentor'
import SignIn from '../src/SignIn'

const screens = {
  LogIn: {
    screen: Login,
  },
  SignIn: {
    screen: SignIn,
  },
  Home: {
    screen: Home,
  },
  Mentor: {
    screen: Mentor,
  },
}

const HomeStack = createStackNavigator(screens)

export default createAppContainer(HomeStack)
