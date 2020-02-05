import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Button , TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

const QuestionListScreen = ({navigation}) => {
  const {state , deleteBlogPost, getBlogPosts } = useContext(Context);

  useEffect(()=>{
    getBlogPosts();
    const listener =  navigation.addListener('didFocus', () => {
      getBlogPosts();
    });
    return () => {
      listener.remove();
    }
   }, [] );

  return (<View>
    <FlatList
      data = {state}
      keyExtractor={(blogPost) => blogPost.id.toString()}
      renderItem={({ item }) => {
        return        <TouchableOpacity onPress={()=> navigation.navigate('Show', {id:item.id})}>
          <View style={styles.row}>
          <TouchableOpacity onPress={()=> navigation.navigate('Quiz', {id:item.id})}>
          <Text style={styles.title}> Show Quiz - {item.id} </Text>
          </TouchableOpacity>

            <Text style={styles.title}> {item.title} - {item.id}</Text>
            <TouchableOpacity onPress={()=> deleteBlogPost(item.id)}>
              <Feather name="trash" style={styles.icon}/>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      }}
    />
  </View>);
};

QuestionListScreen.navigationOptions = ({navigation}) => {
  return {
    headerRight : <TouchableOpacity>
    <Feather name="plus" size={30} onPress={()=>navigation.navigate('Create')}/>
    </TouchableOpacity>
  };
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

export default QuestionListScreen;
