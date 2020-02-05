import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button   } from 'react-native';


const QuestionForm = ({onSubmit, initialValues}) => {
  const [title,setTitle] = useState(initialValues.title);
  const [question,setQuestion] = useState(initialValues.question);
  const [optiona,setOptiona] = useState(initialValues.optiona);
  const [optionb,setOptionb] = useState(initialValues.optionb);
  const [optionc,setOptionc] = useState(initialValues.optionc);
  const [optiond,setOptiond] = useState(initialValues.optiond);

return(
  <View>
    <Text style={styles.label}>Enter Title:</Text>
    <TextInput style={styles.input} value={title} onChangeText={(text)=> setTitle(text)}/>
    <Text style={styles.label}>Enter Question:</Text>
    <TextInput style={styles.input} value={question} onChangeText={(text)=> setQuestion(text)}/>
    <Text style={styles.label}>Enter Option A:</Text>
    <TextInput style={styles.input} value={optiona} onChangeText={(text)=> setOptiona(text)}/>
    <Text style={styles.label}>Enter Option B:</Text>
    <TextInput style={styles.input} value={optionb} onChangeText={(text)=> setOptionb(text)}/>
    <Text style={styles.label}>Enter Option C:</Text>
    <TextInput style={styles.input} value={optionc} onChangeText={(text)=> setOptionc(text)}/>
    <Text style={styles.label}>Enter Option D:</Text>
    <TextInput style={styles.input} value={optiond} onChangeText={(text)=> setOptiond(text)}/>
    <Button title="Save Blog Post" onPress={()=> { onSubmit(title,question,optiona, optionb, optionc, optiond)  }}/>
  </View>
);

};

QuestionForm.defaultProps ={
  initialValues: {
    title:'',
    question:'',
    optiona:'',
    optionb:'',
    optionc:'',
    optiond:''
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


export default QuestionForm;
