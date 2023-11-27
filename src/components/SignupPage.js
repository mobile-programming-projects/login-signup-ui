import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ImageBackground, } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const SignupPage = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSignup = () => {
    navigation.navigate("Login");
  };

  const handleLoginLink = () => {
    navigation.navigate("Login");
  };

  return (
    <ImageBackground
      source={{ uri: "https://i.ibb.co/R4Rw6Yp/background.png" }}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>SIGNUP</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Username"
            onChangeText={(text) => setUsername(text)}
            value={username}
            autoCapitalize="none"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email Address"
            onChangeText={(text) => setEmail(text)}
            value={email}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, styles.passwordInput]}
            placeholder="Password"
            secureTextEntry={!showPassword}
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
          <TouchableOpacity
            style={styles.showPasswordIcon}
            onPress={() => setShowPassword(!showPassword)}
          >
            <Icon
              name={showPassword ? "eye-slash" : "eye"}
              size={20}
              color="gray"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, styles.passwordInput]}
            placeholder="Confirm Password"
            secureTextEntry={!showConfirmPassword}
            onChangeText={(text) => setConfirmPassword(text)}
            value={confirmPassword}
          />
          <TouchableOpacity
            style={styles.showPasswordIcon}
            onPress={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            <Icon
              name={showConfirmPassword ? "eye-slash" : "eye"}
              size={20}
              color="gray"
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
          <Icon
            name="user-plus"
            size={20}
            color="white"
            style={styles.signupIcon}
          />
          <Text style={styles.signupButtonText}> Signup</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLoginLink}>
          <Text style={styles.loginLink}>Already have an account? Login</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#1e90ff",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    width: "85%",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "white",
    paddingLeft: 10,
  },
  input: {
    flex: 1,
    height: 40,
  },
  passwordInput: {
    flex: 1,
    height: 40,
  },
  showPasswordIcon: {
    padding: 10,
  },
  signupButton: {
    backgroundColor: "#1e90ff",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    width: "80%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  signupIcon: {
    marginRight: 10,
  },
  signupButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  loginLink: {
    color: "#fff",
    textDecorationLine: "underline",
    marginTop: 30,
  },
});

export default SignupPage;