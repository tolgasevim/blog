import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Button , TouchableOpacity } from 'react-native';
import { Context} from '../context/UserContext';
import { Feather } from '@expo/vector-icons';

const UserScreen = ({navigation}) => {
  const { state, getUsers } = useContext( Context );

  useEffect(()=>{
    getUsers();
    const listener =  navigation.addListener('didFocus', () => {
      getUsers();
    });
    return () => {
      listener.remove();
    }
   }, [] );

  return (<View>
    <Text>Here are all the users!</Text>
    <FlatList
      data = {state}
      keyExtractor={(user) => user.id.toString()}
      renderItem={({ item }) => {
        return        <TouchableOpacity onPress={()=> navigation.navigate('Show', {id:item.id})}>
          <View style={styles.row}>
          <Text > {item.id} </Text>
          <Text > {item.name} - {item.email}</Text>
          </View>
        </TouchableOpacity>
      }}
    />
  </View>);
};



const styles = StyleSheet.create({
  row: {
  flexDirection: 'row',
  justifyContent: 'flex-start',
  paddingVertical: 20,
  paddingHorizontal: 10,
  borderTopWidth: 1,
  borderColor: 'gray',
  fontSize: 18
  },
  title: {
    fontSize: 18
  },
  icon: {
    fontSize: 24
  }

});

export default UserScreen;
