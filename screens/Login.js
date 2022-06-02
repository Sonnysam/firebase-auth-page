import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";

export default function Login() {

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");



  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/logo.png")}
          resizeMode="contain"
        />
      </View>
      <View style={styles.inputCon}>
        <TextInput
          placeholder="Example@gmail.com"
          style={styles.input}
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          placeholder="Password"
          style={styles.input}
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry
        />

        {/* Button Section */}
        <View>
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Text style={styles.buttonLog}>Login</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={[styles.button, styles.btnOutline]}
            onPress={() => {}}
          >
            <Text style={styles.buttonReg}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  inputCon: {
    width: "80%",
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginTop: 8,
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginTop: 10,
  },

  button: {
    width: "60%",
    backgroundColor: "lightblue",
    borderRadius: 10,
    paddingVertical: 10,
    marginHorizontal: "20%",
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  btnOutline: {
    borderWidth: 2,
    borderColor: "lightblue",
    backgroundColor: "transparent",
  },
  logoContainer: {
    marginTop: 5,
    marginBottom: 5,
  },
  logo: {
    width: 100,
    height: 100,
  },
  buttonReg: {
    color: "lightblue",
    fontWeight: "bold",
    fontSize: 18,
  },
  buttonLog: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
});
