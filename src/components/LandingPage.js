import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ImageBackground, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const LandingPage = ({ navigation }) => {
  return (
    <ImageBackground
      source={{ uri: 'https://i.ibb.co/D5bKCFL/background.png' }}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Image source={{ uri: 'https://i.ibb.co/zPwWBcF/logo.png' }} style={styles.logo} />
        <Text style={styles.title}>Try Login or Sign-up</Text>

        <TouchableOpacity
          style={[
            styles.buttonContainer,
            {
              borderColor: '#1e90ff',
              borderWidth: 1,
              width: 200,
              backgroundColor: '#1e90ff', 
              ...Platform.select({
                ios: {
                  shadowColor: 'black',
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.5,
                  shadowRadius: 2,
                },
                android: {
                  elevation: 2,
                },
              }),
            },
          ]}
          onPress={() => navigation.navigate('Login')}
        >
          <Icon name="login" size={20} color="#fff" style={styles.icon} />
          <Text style={[styles.buttonText, { color: '#fff' }]}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.buttonContainer,
            {
              borderColor: '#1e90ff',
              borderWidth: 1,
              width: 200,
              backgroundColor: '#1e90ff', 
              ...Platform.select({
                ios: {
                  shadowColor: 'black',
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.5,
                  shadowRadius: 2,
                },
                android: {
                  elevation: 2,
                },
              }),
            },
          ]}
          onPress={() => navigation.navigate('Signup')}
        >
          <Icon name="account-plus" size={20} color="#fff" style={styles.icon} />
          <Text style={[styles.buttonText, { color: '#fff' }]}>Signup</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 30,
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#1e90ff',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    marginLeft: 10,
    fontWeight: 'bold',
  },
  icon: {
    marginRight: 10,
  },
  backgroundImage: {
    flex: 2,
    resizeMode: 'cover',
    justifyContent: 'center',
    paddingTop: 90,
  },
});

export default LandingPage;