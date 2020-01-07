import React, {useContext, useState} from 'react';
import {  StyleSheet  } from 'react-native';
import {Context} from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const EditScreen = ({navigation}) => {

  const {editBlogPost,state} = useContext(Context);
  const blogPost = state.find((blogPost)=> blogPost.id===navigation.getParam('id'));
  console.log(blogPost);



  return <BlogPostForm
  initialValues={{title: 'my title', content:'my content 1'}}
  onSubmit={(title,content)=>editBlogPost(id,title,content, ()=>navigation)}/>;

};

const styles = StyleSheet.create({
});

export default EditScreen;
