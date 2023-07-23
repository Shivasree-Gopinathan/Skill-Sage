import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import {
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";

import { auth } from "./config";

export default function Login({ navigation }) {
  
  const handleSignin = () => navigation.navigate("SignIn");
  const handleForgot = () => navigation.navigate("ForgotPassword");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const loginUser = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigation.navigate("SkillSage");
    } catch (error) {
      if (
        error.code === "auth/invalid-email" ||
        error.code === "auth/wrong-password"
      ) {
        setError("Your email or password was incorrect");
      } else if (error.code === "auth/email-already-in-use") {
        setError("An account with this email already exists");
      } else {
        setError("There was a problem with your request");
      }
    }
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={require("../assets/Welcome.png")} style={styles.img} />
        <Text style={styles.headText}>Welcome to Skill Sage!!</Text>
        <Text style={styles.text}>Find your perfect mentor within clicks</Text>
        <View style={styles.innercontainer}>
          <View style={styles.input}>
            <TextInput
              placeholder="Email ID"
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <View style={styles.input}>
            <TextInput
              placeholder="Password"
              secureTextEntry={true}
              value={password}
              onChangeText={setPassword}
            />
          </View>
          <View>
            <Text style={styles.text1} onPress={handleForgot}>
              Forget Password?
            </Text>
          </View>
          <View style={styles.btn}>
            <Button
              title="Login"
              color={"#ffc700"}
              onPress={loginUser}
              disabled={!email || !password}
            />
          </View>
          <View>
            <Text style={styles.text}>
              Don't have an account?{" "}
              <Text style={styles.text1} onPress={handleSignin}>
                SignIn
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
  innercontainer: {
    marginHorizontal: 20,
  },
  img: {
    marginTop: 50,
    marginLeft: "auto",
    marginRight: "auto",
    paddingTop: 0,
  },
  headText: {
    marginLeft: "auto",
    marginRight: "auto",
    color: "#006E7F",
    fontSize: 24,
    fontWeight: 500,
  },
  text: {
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "20%",
    color: "#006E7F",
    fontWeight: 300,
  },
  text1: {
    marginLeft: "auto",
    color: "#006E7F",
    fontWeight: 300,
    textDecorationLine: "underline",
  },
  input: {
    marginVertical: 10,
    padding: 10,
    borderColor: "#ccc",
    borderWidth: 1,
  },
  btn: {
    marginTop: 40,
    marginBottom: 20,
  },
});