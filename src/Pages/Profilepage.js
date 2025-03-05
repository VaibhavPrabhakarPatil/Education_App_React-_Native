import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function ProfilePage({ navigation }) {
  const handleLogout = () => {
    navigation.navigate('Home'); 
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.profileImage}
        source={require('../../assets/images/profile.png')} 
      />
      <Text style={styles.name}>Vaibhav Patil</Text>
      <Text style={styles.email}>vaibhav.patil@example.com</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('EditProfile')}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
    marginVertical: 100,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
    borderWidth: 2, 
    borderColor: '#007bff',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  email: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10, 
    borderWidth: 2, 
    borderColor: '#007bff', 
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  logoutButton: {
    backgroundColor: '#dc3545',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10, 
    borderWidth: 2, 
    borderColor: '#dc3545', 
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});
