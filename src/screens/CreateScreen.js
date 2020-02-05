import React, {useContext} from 'react';
import { StyleSheet  } from 'react-native';
import {Context} from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';


const CreateScreen = ({navigation}) => {

  const {addBlogPost} = useContext(Context);

  return (
    <BlogPostForm onSubmit={
    (title, question, optiona, optionb, optionc, optiond )=> { addBlogPost( title, question, optiona , optionb, optionc, optiond , ()=> navigation.navigate('QuestionList'));
  }} />
  );


};

const styles = StyleSheet.create({
});

export default CreateScreen;
