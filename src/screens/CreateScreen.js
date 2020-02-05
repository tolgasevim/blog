import React, {useContext} from 'react';
import { StyleSheet  } from 'react-native';
import {Context} from '../context/QuestionContext';
import QuestionForm from '../components/QuestionForm';


const CreateScreen = ({navigation}) => {

  const {addBlogPost} = useContext(Context);

  return (
    <QuestionForm onSubmit={
    (title, question, optiona, optionb, optionc, optiond )=> { addBlogPost( title, question, optiona , optionb, optionc, optiond , ()=> navigation.navigate('QuestionList'));
  }} />
  );


};

const styles = StyleSheet.create({
});

export default CreateScreen;
