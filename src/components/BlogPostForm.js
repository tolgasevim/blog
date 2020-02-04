import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button   } from 'react-native';


const BlogPostForm = ({onSubmit, initialValues}) => {
  const [title,setTitle] = useState(initialValues.title);
  const [question,setQuestion] = useState(initialValues.question);
  const [optiona,setOptiona] = useState(initialValues.optiona);

return(
  <View>
    <Text style={styles.label}>Enter Title:</Text>
    <TextInput style={styles.input} value={title} onChangeText={(text)=> setTitle(text)}/>
    <Text style={styles.label}>Enter Question:</Text>
    <TextInput style={styles.input} value={question} onChangeText={(text)=> setQuestion(text)}/>
    <Text style={styles.label}>Enter Option A:</Text>
    <TextInput style={styles.input} value={optiona} onChangeText={(text)=> setOptiona(text)}/>
    <Button title="Save Blog Post" onPress={()=> { onSubmit(title,question)  }}/>
  </View>
);

};

BlogPostForm.defaultProps ={
  initialValues: {
    title:'',
    question:'',
    optiona:''
  }
};

const styles = StyleSheet.create({
input: {
  fontSize: 18,
  borderWidth: 1,
  borderColor: 'black'
},
label :{
  fontSize:20,
  marginBottom:10
}
});


export default BlogPostForm;
