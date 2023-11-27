import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const RecoveryPage = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleResetPassword = () => {
    navigation.navigate('Landing');
  };

  const handleBackToLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <ImageBackground
      source={{ uri: 'https://i.ibb.co/R4Rw6Yp/background.png' }}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>PASSWORD RESET</Text>
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
        <TouchableOpacity style={styles.resetButton} onPress={handleResetPassword}>
          <Icon name="envelope" size={20} color="white" style={styles.resetIcon} />
          <Text style={styles.resetButtonText}> Request reset link</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.backToLoginButton} onPress={handleBackToLogin}>
          <Icon name="arrow-left" size={12} color="white" style={styles.backIcon} />
          <Text style={styles.backToLoginText}>Back to Login</Text>
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
    marginBottom: 5,
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
  resetButton: {
    backgroundColor: "#1e90ff",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
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
  resetIcon: {
    marginRight: 10,
  },
  resetButtonText: {
    color: 'white',
    fontWeight: "bold",
    fontSize: 16,
  },
  backToLoginButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    marginTop: 30,
  },
  backIcon: {
    marginRight: 10,
  },
  backToLoginText: {
    color: "#fff",
    textDecorationLine: 'underline',
    fontSize: 16,
  },
});

export default RecoveryPage;