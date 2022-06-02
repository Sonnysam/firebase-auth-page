import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import React from 'react'


export default function Login() {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.inputCon}>
        <TextInput
          placeholder="Email"
          styles={styles.input}
          // value={}
          // onChangeText={}
        />
        <TextInput
          placeholder="Password"
          styles={styles.input}
          // value={}
          // onChangeText={}
          secureTextEntry
        />

        {/* Button Section */}
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {}}
          >
            <Text style={styles.button}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  inputCon: {

  },
  input: {

  },
});