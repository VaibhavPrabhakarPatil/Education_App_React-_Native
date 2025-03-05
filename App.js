import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import HomeNavigation from './src/Navigation/HomeNavigation';

export default function App() {
  return (
    
    <NavigationContainer>
      <HomeNavigation />
   </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
