import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CourseDetails from '../Pages/CourseDetails';
import Home from '../Pages/Home';
import ProfilePage from '../Pages/Profilepage';  // Ensure the correct casing

const Stack = createNativeStackNavigator();

export default function HomeNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Course-Details" component={CourseDetails} />
      <Stack.Screen name="Profile-Page" component={ProfilePage} />
    </Stack.Navigator>
  );
}
