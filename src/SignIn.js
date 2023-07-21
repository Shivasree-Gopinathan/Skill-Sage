import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  Alert
} from 'react-native'
import { Formik } from 'formik'
import * as Yup from 'yup' 

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Name cannot be Empty'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
      .min(8)
      .required('Please enter your password')
      .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,'must contain minimum 8 characters ,atleat one uppercase letter , one lowercase letter, one number and one special character.'),
  confirmPassword: Yup.string()
      .min(8,'Confirm Password must be 8 characters long')
      .oneOf([Yup.ref('password')], 'Your Password does not match')
      .required('Your password cannot be empty')
    });

export default function SignIn({ navigation }) {
  const pressHandler = () => navigation.navigate('Home')
  const handleLogin = () => navigation.navigate('Login')

  return (
    
    <ScrollView>
      <Formik initialValues={{
        name:'',
        email:'',
        password:'',
        confirmPassword :'',
      }}
      validationSchema={SignupSchema}
      onSubmit={values=>Alert.alert(JSON.stringify(values))}
      >
        {({values, errors,touched,handleChange,setFieldTouched,isValid,handleSubmit}) => (


       
      <View style={styles.container}>
        <Image source={require('../assets/Login.png')} style={styles.img} />
        <View>
          <Text style={styles.headText}>Signup</Text>
        </View>
        <View style={styles.innercontainer}>
          <View style={styles.input}>
            <TextInput placeholder='Username' values={values.name} onChangeText={handleChange('name')} onBlur={() => setFieldTouched('name')}/>
            {
              touched.name && errors.name && 
              (
              <Text style={styles.errorTxt}>{errors.name}

              </Text>)
            }
          </View>
          <View style={styles.input}>
            <TextInput placeholder='Email ID' autoCapitalize={false} values={values.email} onChangeText={handleChange('email')} onBlur={() => setFieldTouched('email')}/>
            {
              touched.email && errors.email && 
              (
              <Text style={styles.errorTxt}>{errors.email}

              </Text>)
            }
          </View>
          <View style={styles.input}>
            <TextInput placeholder='Password' autoCapitalize={false} values={values.password} onChangeText={handleChange('passsword')} onBlur={() => setFieldTouched('password')}/>
            {
              touched.password && errors.password && 
              (
              <Text style={styles.errorTxt}>{errors.password}

              </Text>)
            }
          </View>
          <View style={styles.input}>
            <TextInput placeholder='Confirm Password' autoCapitalize={false} values={values.confirmPassword} onChangeText={handleChange('confirmPasssword')} onBlur={() => setFieldTouched('confirmPassword')}/>
            {
              touched.confirmPassword && errors.confirmPassword && 
              (
              <Text style={styles.errorTxt}>{errors.confirmPassword}

              </Text>)
            }
 
          </View>
          <View style={styles.btn}>
            <Button title='Signup' color={'#ffc700'} onPress={pressHandler} disabled={!isValid} style={[styles.btn,{backgroundColor:isValid?'#ffc700':'#a5c9ca'}]
          } />
          </View>
          <View>
            <Text style={styles.text}>
              Have an account?{' '}
              <Text style={styles.text1} onPress={handleLogin}>
                Login
              </Text>
            </Text>
          </View>
        </View>
      </View>
       )}
      </Formik>
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
  img: {
    marginTop: -50,
    paddingTop: 0,
  },
  headText: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 20,
    marginBottom: 10,
    color: '#006E7F',
    fontSize: 24,
    fontWeight: 500,
  },
  text: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 30,
    color: '#006E7F',
    fontWeight: 300,
  },
  text1: {
    marginLeft: 'auto',
    color: '#006E7F',
    fontWeight: 300,
    textDecorationLine: 'underline',
  },
  input: {
    marginVertical: 10,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  btn: {
    marginTop: 10,
    marginBottom: 20,
    width: '100%',
  },
})
