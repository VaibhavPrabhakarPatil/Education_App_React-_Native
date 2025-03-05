import React, { useState } from 'react';
import { StatusBar, StyleSheet, Text, View, TouchableOpacity, Pressable } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import ProfileModal from './ProfileModal';  

export default function WelcomeHeader() {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.headerContainer}>
      <StatusBar style="dark" backgroundColor="black" />
      <View style={styles.row}>
        <Text style={styles.welcomeText}>Hello</Text>
        <Pressable onPress={toggleModal}>
          <Entypo name="user" size={24} color="black" style={styles.userIcon} />
        </Pressable>
      </View>
      <Text style={styles.boldText}>Vaibhav Patil</Text>
      <ProfileModal visible={modalVisible} onClose={toggleModal} />
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: 40,
    paddingBottom: 20,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  welcomeText: {
    fontSize: 18,
    color: '#000',
  },
  boldText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 5,
  },
  userIcon: {
    marginLeft: 'auto',
  },
});
