import React from 'react';
import { View, Text, Button, ImageBackground, Image, StyleSheet } from 'react-native';

const HomePage = ({ navigation }) => {
  return (
    <ImageBackground
      source={{ uri: 'https://i.ibb.co/D5bKCFL/background.png' }}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Image
          source={{ uri: 'https://media.tenor.com/xHqXV8BBiHYAAAAi/baldi-dance.gif' }}
          style={styles.gifImage}
        />
        <Text style={styles.headerText}>Welcome to the Home Page</Text>
        <Text style={styles.descriptionText}>
          Developed by John Dwight L. Paye
        </Text>
        <Button
          title="Logout"
          onPress={() => navigation.navigate('Landing')}
          color="#1e90ff"
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', 
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
  gifImage: {
    width: 200, 
    height: 200, 
    marginBottom: 5,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#1e90ff',
  },
  descriptionText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
    color: '#1e90ff',
  },
});

export default HomePage;