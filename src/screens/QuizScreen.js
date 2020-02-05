import React, {useContext, useState, useReducer} from 'react';
import { View, Text, StyleSheet , TouchableOpacity } from 'react-native';
import {Context} from '../context/QuestionContext';
import { Feather } from '@expo/vector-icons';



const QuizScreen = ({navigation}) => {

  const [id,setId] = useState(1);
  const [answered,setAnswered] = useState(false);
  const [answerWasCorrect,setAnswerWasCorrect] = useState(false);
  const [answer,setAnswer] = useState("");

  const [noOfAnswered,setNoOfAnswered] = useState(0);
  const [noOfCorrectAnswered,setNoOfCorrectAnswered] = useState(0);

  var nextButton = <Text></Text>;;

// here in state we have all the questions everything from jsonserver
  const {state} = useContext(Context);

  console.log("*******");
  console.log(id);
  const blogPost = state.find((blogPost)=> blogPost.id===id);

  console.log("*******");
  console.log(blogPost);

  var answerTag = <Text></Text>;
  if(answerWasCorrect && answered ) {
    answerTag = <Text>Correct answer</Text>;
//    setNoOfCorrectAnswered ( noOfCorrectAnswered +1);
} else if(answered && !answerWasCorrect) {
    answerTag = <Text>Wrong answer, correct answer was {blogPost.correctAnswer}</Text>;
  }
  if(answered && noOfAnswered < 10) {
        nextButton =
        <View style={styles.button} >
        <TouchableOpacity onPress={()=> {setAnswered(false); setAnswer(""); setId(id+1); } }><Text>Next Question</Text></TouchableOpacity>
        </View>;
  } else if ( answered && noOfAnswered === 10 ) {
        nextButton =
        <View style={styles.button} >
        <TouchableOpacity onPress={()=> navigation.navigate('QuizResult', {noOfCorrectAnswered:noOfCorrectAnswered})}><Text>Finish exam</Text></TouchableOpacity>
        </View>;
  }
  answerClick = (answer, blogPost) => {
    setAnswered(true);
    setNoOfAnswered(noOfAnswered+1);
    if(answer===blogPost.correctAnswer ) {
          setNoOfCorrectAnswered ( noOfCorrectAnswered +1);
          setAnswerWasCorrect(true);
    } else setAnswerWasCorrect(false);
    console.log("******* answerClick **");
    console.log(blogPost);
    console.log(answer);
    console.log(answered);
    console.log(noOfCorrectAnswered);
  }

  return (<View>
    <Text>Fach: {blogPost.title}</Text>
    <View style={styles.question} >
    <Text>{blogPost.question}</Text>
    </View>
    <View style={styles.answerContainer} >
    <TouchableOpacity style={styles.answer} disabled={answered} onPress={()=> {answerClick("a", blogPost); } }><Text>A) {blogPost.optiona}</Text></TouchableOpacity>
    <TouchableOpacity style={styles.answer} disabled={answered} onPress={()=> {answerClick("b", blogPost); } }><Text>B) {blogPost.optionb}</Text></TouchableOpacity>
    </View>
    <View style={styles.answerContainer}>
    <TouchableOpacity style={styles.answer} disabled={answered} onPress={()=> {answerClick("c", blogPost); } }><Text>C) {blogPost.optionc}</Text></TouchableOpacity>
    <TouchableOpacity style={styles.answer} disabled={answered} onPress={()=> {answerClick("d", blogPost); } }><Text>D) {blogPost.optiond}</Text></TouchableOpacity>
    </View>
    <View style={styles.answerContainer} >
      {answerTag}
    </View>

      {nextButton}



    <Text>Correct answers: {noOfCorrectAnswered} /Total answered: {noOfAnswered}</Text>
  </View>);
};


const styles = StyleSheet.create({
  title: {
    fontSize: 18
  },
  icon: {
    fontSize: 24
  },
  answer: {
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'stretch',
    flex:1,
    height: 30,
    justifyContent: 'center',
    backgroundColor: '#eee'

  },
  question: {
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',


    height: 50,
    justifyContent: 'center',
    backgroundColor: '#eee'

  },
  button: {
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    justifyContent: 'center',
    backgroundColor: '#eee'
  },
  answerContainer: {
    alignItems: 'stretch',
    flexDirection: 'row'

  }

});

export default QuizScreen;
