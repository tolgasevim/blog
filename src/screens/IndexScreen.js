import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Button , TouchableOpacity } from 'react-native';

const IndexScreen = ({navigation}) => {


  return (<View>
     <TouchableOpacity onPress={()=> navigation.navigate('QuestionList')}>
     <Text style={styles.title}> Question List</Text>
     </TouchableOpacity>
     <TouchableOpacity onPress={()=> navigation.navigate('Quiz')}>
     <Text style={styles.title}> Quiz</Text>
     </TouchableOpacity>

     <Text> Which user do you want to select? </Text>
     <TouchableOpacity onPress={()=> navigation.navigate('User')}>
     <Text style={styles.title}> User</Text>
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
