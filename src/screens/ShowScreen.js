import React, {useContext} from 'react';
import { View, Text, StyleSheet  } from 'react-native';
import {Context} from '../context/BlogContext';

const ShowScreen = ({navigation}) => {

  const {state} = useContext(Context);
  const blogPost = state.find((blogPost)=> blogPost.id===navigation.getParam('id'));
  console.log(blogPost.id);
  return (<View>
    <Text>{blogPost.title}</Text>
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

export default ShowScreen;
