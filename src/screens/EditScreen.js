import React, {useContext, useState} from 'react';
import {  StyleSheet  } from 'react-native';
import {Context} from '../context/QuestionContext';
import QuestionForm from '../components/QuestionForm';

const EditScreen = ({navigation}) => {

  const id = navigation.getParam('id');
  const {editBlogPost,state} = useContext(Context);
  const blogPost = state.find((blogPost)=> blogPost.id===id);
  console.log(blogPost);



  return <QuestionForm
  initialValues={blogPost}
  onSubmit={(title, question, optiona, optionb, optionc, optiond)=>editBlogPost(id , title , question, optiona, optionb, optionc, optiond, ()=>navigation.pop())}/>;

};

const styles = StyleSheet.create({
});

export default EditScreen;
