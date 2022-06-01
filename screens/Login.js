import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import React from 'react'
// import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView'

export default function Login() {
  return (
    <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
    >
      <View style={styles.inputCon}>
          <TextInput
            placeholder="Email"
            styles={styles.input}
            // value={}
            // onChangeText={}
          />
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({});