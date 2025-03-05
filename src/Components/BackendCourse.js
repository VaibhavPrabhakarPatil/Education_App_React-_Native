import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, FlatList, Pressable } from 'react-native';

const user = [
  {
    image: require("@/assets/images/spring.png"),
    title: 'Spring Boot',
    introduction: "Introduction",
    Exaplain: 'Spring is widely used for creating scalable applications. For web applications, Spring provides Spring MVC, which is a widely used module of Spring to create scalable web applications.',
    CourseTitle:'Course Contents',
    schapter:"Spring Boot Started",
    tchapter:"Spring Boot Syntax",
    fochapter:"Spring Boot Comments",
    fichapter:"Spring Boot Varibles",

  },
  {
    image: require('@/assets/images/php.png'),
    title: 'PHP',
    introduction: "Introduction",
    Exaplain: "PHP is an acronym for Hypertext Preprocessor. It is a widely-used, open-source scripting language, and PHP scripts are executed on the server.",
    CourseTitle:'Course Contents',
    schapter:"PHP Started",
    tchapter:"PHP Syntax",
    fochapter:"PHP Comments",
    fichapter:"PHP Varibles",

  },
  {
    image: require('@/assets/images/oracle.png'),
    title: 'Oracle',
    introduction: "Introduction",
    Exaplain: "A database management system (DBMS) is software that controls the storage, organization, and retrieval of data.",
    CourseTitle:'Course Contents',
    schapter:"Oracle Started",
    tchapter:"Oracle Syntax",
    fochapter:"Oracle Comments",
    fichapter:"Oracle Varibles",

  },
];

export default function BackendCourse() {
  const navigation = useNavigation();

  const onPressCourse = (course) => {
    navigation.navigate('Course-Details', { courseData: course });
  };

  const CourseItem = ({ item }) => (
    <Pressable style={styles.icontainer} onPress={() => onPressCourse(item)}>
      <View style={styles.border}>
        <Image style={styles.img} source={item.image} />
        <Text style={styles.texttitle}>{item.title}</Text>
      </View>
    </Pressable>
  );

  return (
    <View style={styles.containerView}>
      <Text style={styles.textHeading}>Backend Course</Text>
      <FlatList
        data={user}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <CourseItem item={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.imageContainerFlat}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
  },
  textHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    marginHorizontal: 19,
  },
  img: {
    width: 180,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  icontainer: {
    alignItems: 'center', 
    marginHorizontal: 10,
  },
  texttitle: {
    marginTop: 5,
    fontSize: 15,
    fontWeight: '400',
    textAlign: 'center', 
  },
  imageContainerFlat: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  border: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#e6e6e6',
    padding: 10, 
    alignItems: 'center', 
  },
});
