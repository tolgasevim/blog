import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Button , TouchableOpacity } from 'react-native';
import { Context } from '../context/QuestionContext';

const IndexScreen = ({navigation}) => {
  const {state , deleteBlogPost, getBlogPosts } = useContext(Context);

  useEffect(()=>{
    getBlogPosts();
    const listener =  navigation.addListener('didFocus', () => {
      getBlogPosts();
    });
    return () => {
      listener.remove();
    }
   }, [] );



  return (<View>
     <TouchableOpacity onPress={()=> navigation.navigate('QuestionList')}>
     <Text style={styles.title}> Question List</Text>
     </TouchableOpacity>
     <TouchableOpacity onPress={()=> navigation.navigate('Quiz')}>
     <Text style={styles.title}> Quiz</Text>
     </TouchableOpacity>
     <TouchableOpacity onPress={()=> navigation.navigate('Quiz')}>
     <Text style={styles.title}> Quiz</Text>
     </TouchableOpacity>
  </View>);
};


const styles = StyleSheet.create({
  row: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingVertical: 20,
  paddingHorizontal: 10,
  borderTopWidth: 1,
  borderColor: 'gray'
  },
  title: {
    fontSize: 18
  },
  icon: {
    fontSize: 24
  }

});

export default IndexScreen;
