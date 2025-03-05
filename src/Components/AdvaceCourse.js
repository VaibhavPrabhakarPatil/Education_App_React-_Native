import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList, Pressable } from 'react-native';

const Course = [
  {
    image: require('@/assets/images/python.png'),
    title: 'Advance Python',
    introduction:"Introducation",
    Exaplain:'Python is a popular programming language. It was created by Guido van Rossum, and released in 1991.It is used for:web development (server-side),software development,mathematics,system scripting.',
    CourseTitle:'Course Contents',
    schapter:"Geatting Started",
    tchapter:"Python Syntax",
    fochapter:"Python Comments",
    fichapter:"Python Varibles",


  },
  {
    image: require('@/assets/images/React.png'),
    title: 'Advance React JS',
    introduction:"Introducation",
    Exaplain:'React, sometimes referred to as a frontend JavaScript framework, is a JavaScript library created by Facebook.React is a tool for building UI components.',
    CourseTitle:'Course Contents',
    schapter:"Geatting Started",
    tchapter:"React Syntax",
    fochapter:"React Comments",
    fichapter:"React Function Componet",

  },
  {
    image: require('@/assets/images/javascript.png'),
    title: 'Advance JavaScript',
    introduction:"Introducation",
    Exaplain:'JavaScript is a powerful programming language that can add interactivity to a website. It was invented by Brendan Eich. JavaScript is versatile and beginner-friendly',
    CourseTitle:'Course Contents',
    schapter:"Geatting Started",
    tchapter:"Java Syntax",
    fochapter:"Java Comments",
    fichapter:"Java Varibles",


  },
];

export default function AdvanceCourse() {
  const navigation = useNavigation();

  const onPressCourse = (course) => {
    // console.log("course", course);
    navigation.navigate('Course-Details', { courseData: course });
  };

  const CourseItem = ({ item }) => (
    <Pressable style={styles.itemContainer} onPress={() => onPressCourse(item)}>
      <View style={styles.border}>
        <Image style={styles.image} source={item.image} />
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.textHeading}>Advance Course</Text>
      <FlatList
        data={Course}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <CourseItem item={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.imageContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10,
  },
  textHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginHorizontal: 19,
  },
  image: {
    width: 200,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 10,
    marginHorizontal: 1,
  },
  itemContainer: {
    marginRight: 1,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  title: {
    marginTop: 5,
    fontSize: 15,
    fontWeight: '400',
    marginLeft: 40,
    marginTop: 5,
    marginBottom: 5,
  },
  imageContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  border: {
    borderWidth: 1,
    paddingTop: 10,
    borderRadius: 8,
    borderColor: '#e6e6e6',
  },
});
