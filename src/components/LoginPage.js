import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const LoginPage = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    navigation.navigate('Home');
  };

  const handleRecovery = () => {
    navigation.navigate('Recovery');
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSignup = () => {
    navigation.navigate('Signup');
  };

  return (
    <ImageBackground
      source={{ uri: 'https://i.ibb.co/R4Rw6Yp/background.png' }}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>LOGIN</Text>
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
          <TouchableOpacity onPress={toggleShowPassword} style={styles.eyeIconContainer}>
            <Icon name={showPassword ? 'eye-slash' : 'eye'} size={20} color="gray" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Icon name="sign-in" size={20} color="white" style={styles.loginIcon} />
          <Text style={styles.loginButtonText}> Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.loginButton, styles.registerButton]} onPress={handleSignup}>
          <Icon name="user-plus" size={20} color="white" style={styles.registerIcon} />
          <Text style={styles.registerButtonText}> Register</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleRecovery}>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#1e90ff',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    width: '85%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'white', 
    paddingLeft: 10,
  },
  input: {
    flex: 1,
    height: 40,
  },
  passwordInput: {
    flex: 1,
  },
  eyeIconContainer: {
    padding: 10,
  },
  forgotPassword: {
    color: "#fff",
    textDecorationLine: 'underline',
    marginTop: 20,
  },
  loginButton: {
    backgroundColor: "#1e90ff",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    width: '80%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  registerButton: {
    marginTop: 10,
  },
  registerIcon: {
    marginRight: 10,
  },
  loginIcon: {
    marginRight: 10,
  },
  loginButtonText: {
    color: 'white',
    fontWeight: "bold",
    fontSize: 16,
  },
  registerButtonText: {
    color: 'white',
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default LoginPage;