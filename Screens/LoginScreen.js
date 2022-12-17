import { StatusBar } from "expo-status-bar";
import { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Platform,
  Alert,
} from "react-native";
import axios from "axios";
import default_styles from "../components/styles";

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const pwRef = useRef(null);
  const handleLogin = () => {
    // alert(`Username: ${username} Password: ${password}`);

    //1 false 2 true
    axios({
      url: "https://6398134d77359127a04679ca.mockapi.io/login/2",
      // url: "http://127.0.0.1:8000/PostTest",
      // url: "http://10.0.2.2:8000/PostTest",
      method: "get",
      data: {
        User_name: username,
        Pass_word: password,
      },
    })
      .then((result) => {
        // console.log(result.data.isAccess);
        if (result.data.isAccess === "true") {
          navigation.navigate("ListRoom");
        } else {
          Alert.alert(
            "Đăng nhập thất bại",
            "Tài khoản không chính xác hoặc đã bị khoá",
            [{ text: "OK" }]
          );
          console.log("Login failed");
        }
      })
      .catch((error) => {
        console.log(error);
      });
    // navigation.navigate("ListRoom");
  };
  return (
    <View style={default_styles.container}>
      <KeyboardAvoidingView
        style={{ width: "100%" }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.form}>
          <Text>Ten dang nhap</Text>
          <TextInput
            style={styles.formInput}
            placeholder={"Ten dang nhap"}
            onChangeText={setUsername}
            autoCorrect={false}
            returnKeyType="next"
            keyboardType="email-address"
            onSubmitEditing={() => pwRef.current.focus()}
          ></TextInput>
          <Text>Mat khau</Text>
          <TextInput
            style={styles.formInput}
            placeholder={"Mat khau"}
            onChangeText={setPassword}
            autoCorrect={false}
            secureTextEntry={true}
            returnKeyType="go"
            ref={pwRef}
            onSubmitEditing={handleLogin}
          ></TextInput>
        </View>
        <TouchableOpacity style={styles.formButton} onPress={handleLogin}>
          <Text>Dang nhap</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    width: "100%",
    paddingHorizontal: 70,
    paddingVertical: 20,
  },
  formInput: {
    borderBottomWidth: 2,
    height: 50,
    width: "100%",
    marginVertical: 20,
    fontSize: 19,
  },
  formButton: {
    backgroundColor: "#4DC6CF",
    paddingHorizontal: 20,
    paddingVertical: 20,
    alignSelf: "flex-end",
    marginRight: 70,
  },
});
