import React, {useContext} from 'react';
import { View, Text, StyleSheet , TouchableOpacity } from 'react-native';
import {Context} from '../context/QuestionContext';
import { Feather } from '@expo/vector-icons';


const QuizResultScreen = ({navigation}) => {

  const {state} = useContext(Context);

  return (<View>
    <Text>Congratulations!</Text>
    <Text>You have answered {navigation.getParam('noOfCorrectAnswered')} out of 10 questions! </Text>
    <Text>Do you want to try again? !</Text>
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

export default QuizResultScreen;
