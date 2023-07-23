import { NavigationContainer } from '@react-navigation/native'
import AuthStack from './routes/AuthStack.js'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AuthStack />
      </NavigationContainer>
    </SafeAreaProvider>
  )
}
