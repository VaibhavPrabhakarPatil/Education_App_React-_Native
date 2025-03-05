import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import EvilIcons from '@expo/vector-icons/EvilIcons';

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <EvilIcons name="search" size={24} color="#979191" />
      <TextInput 
        style={styles.input} 
        placeholder='Search' 
        placeholderTextColor="#979191" 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    elevation: 2,
    marginTop: 10,
    width: '90%',
    alignSelf: 'center',
  },
  input: {
    flex: 1, 
    marginLeft: 10, 
    color: '#000', 
  }
});
