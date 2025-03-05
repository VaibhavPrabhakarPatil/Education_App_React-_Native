import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, FlatList, Pressable } from 'react-native';

const user = [
  {
    image: require("@/assets/images/clang.png"),
    title: 'Basic C',
    introduction: "Introduction",
    Exaplain: 'C is a general-purpose programming language created by Dennis Ritchie at the Bell Laboratories in 1972.',
    CourseTitle:'Course Contents',
    schapter:"C Lang Started",
    tchapter:"C Lang Syntax",
    fochapter:"C Lang Comments",
    fichapter:"C Lang Componet",

  },
  {
    image: require('@/assets/images/Cplus.png'),
    title: 'Basic C++',
    introduction: "Introduction",
    Exaplain: "C++ is a cross-platform language that can be used to create high-performance applications.",
    CourseTitle:'Course Contents',
    schapter:"C++ Started",
    tchapter:"C++ Syntax",
    fochapter:"C++ Comments",
    fichapter:" C++ Componet",

  },
  {
    image: require('@/assets/images/html.png'),
    title: 'Basic HTML',
    introduction: "Introduction",
    Exaplain: "HTML is the universal markup language for the Web. HTML lets you format text, add graphics, create links, input forms, frames and tables, etc.",
    CourseTitle:'Course Contents',
    schapter:"HTML Started",
    tchapter:"HTML Syntax",
    fochapter:"HTML Comments",
    fichapter:"HTML Componet",

  },
];

export default function BasicCourse() {
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
      <Text style={styles.textHeading}>Basic Course</Text>
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
