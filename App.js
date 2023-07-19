import { StyleSheet } from 'react-native'
import Navigator from './routes/homestack.js'

export default function App() {
  return <Navigator />
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#fff',
    margin: 0,
    padding: 0,
  },
})
