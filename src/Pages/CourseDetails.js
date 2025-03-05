import { useRoute, useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, Pressable, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function CourseDetails() {
  const route = useRoute();
  const navigation = useNavigation();
  const { courseData } = route.params;

  return (
    <>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={30} color="black" />
        </Pressable>
        <Text style={styles.title}>{courseData.title}</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <Image style={styles.image} source={courseData.image} />
          <Text style={styles.textheadding}>{courseData.introduction}</Text>
          <Text style={styles.text}>{courseData.Exaplain}</Text>
          <View style={styles.courseTitleContainer}>
            <Text style={styles.courseTitleLeft}>{courseData.CourseTitle}</Text>
          </View>
          <View style={styles.introductionContainer}>
            <Text style={styles.introductionText}>1  {courseData.introduction}</Text>
            <View style={styles.playIconWrapper}>
              <Ionicons name="play-circle-outline" size={30} color="blue" />
            </View>
          </View>
          <View style={styles.introductionContainer}>
            <Text style={styles.introductionText}>2  {courseData.schapter}</Text>
            <View style={styles.playIconWrapper}>
              <Ionicons name="play-circle-outline" size={30} color="blue" />
            </View>
          </View>
          <View style={styles.introductionContainer}>
            <Text style={styles.introductionText}>3  {courseData.tchapter}</Text>
            <View style={styles.playIconWrapper}>
              <Ionicons name="play-circle-outline" size={30} color="blue" />
            </View>
          </View>
          <View style={styles.introductionContainer}>
            <Text style={styles.introductionText}>4  {courseData.fochapter}</Text>
            <View style={styles.playIconWrapper}>
              <Ionicons name="play-circle-outline" size={30} color="blue" />
            </View>
          </View>
          <View style={styles.introductionContainer}>
            <Text style={styles.introductionText}>5  {courseData.fichapter}</Text>
            <View style={styles.playIconWrapper}>
              <Ionicons name="play-circle-outline" size={30} color="blue" />
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  container: {
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 150,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  textheadding: {
    fontSize: 25,
    fontWeight: 'bold',
    marginVertical: 15,
  },
  text: {
    fontSize: 15,
  },
  courseTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'flex-start',
    marginVertical: 15,
  },
  courseTitleLeft: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  introductionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    width: '100%',
    marginVertical: 10,
  },
  introductionText: {
    fontSize: 15,
    flex: 1,
    fontWeight: '700',
  },
  playIconWrapper: {
    borderColor: 'black',
    borderRadius: 30,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 40,
  },
});
