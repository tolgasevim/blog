import React, {useContext, useState} from 'react';
import { View, Text, StyleSheet, TextInput  } from 'react-native';
import {Context} from '../context/BlogContext';

const CreateScreen = ({navigation}) => {

  const {state} = useContext(Context);

  return (<View>

    <Text>Enter Title:</Text>
    <TextInput/>
    <Text>Enter Content:</Text>
    <TextInput/>
  </View>);
};

const styles = StyleSheet.create({

});

export default CreateScreen;
