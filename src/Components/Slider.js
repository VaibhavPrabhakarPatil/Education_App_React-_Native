import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';

export default function Slider() {
    return (
    <View style={styles.container}>
      <View style={styles.imgview}>
      <View style={styles.imgview}>
        <Image style={styles.img} source={require('@/assets/images/Slider1.jpg')}/>
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 2, 
    marginHorizontal: 15, 
  },
  img: {
    width: '100%', 
    height: 150, 
    borderRadius: 10, 
    marginVertical: 10, 
  },
  imgview:{
    marginLeft:2,
    textAlign:'center'
  }
});
