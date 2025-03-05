import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Modal, View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

export default function ProfileModal({ visible, onClose }) {
  const navigation = useNavigation();

  const handleLogout = () => {
    navigation.navigate("Home");
    onClose();
  }

  return (
    <Modal
      transparent={true}
      visible={visible}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Profile</Text>
          
          <View style={styles.buttonContainer}>
            <Button 
              title="Profile" 
              onPress={() => {
                onClose(); 
                navigation.navigate('Profile-Page');
              }} 
            />
          </View>
          
          <View style={styles.buttonContainer}>
            <Button 
              title="Logout" 
              onPress={handleLogout}
              color="red" 
            />
          </View>
          
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: 300,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    paddingVertical: 10,
  },
  closeButton: {
    marginTop: 20,
    alignSelf: 'center',
  },
  closeButtonText: {
    color: 'blue',
  },
});
