import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import WelcomeHeader from '../Components/WelcomeHeader';
import SerchBar from '../Components/SerchBar';
import Slider from '../Components/Slider';
import AdvanceCourse from '../Components/AdvaceCourse';
import BasicCourse from '../Components/BasicCourse';
import BackendCourse from '../Components/BackendCourse';

export default function Home() {
  return (

    <View style={{height:'100%'}}>
      <WelcomeHeader/>
 
<ScrollView>
 <SerchBar/>
 <Slider/>
  <BasicCourse />
  <AdvanceCourse/>
  <BackendCourse />
  </ScrollView>
    </View>
  );
}

