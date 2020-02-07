import React, { Component } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

  const LoginScreen = ( {navigation} ) => {
    return (
      <View style={styles.container}>
      <View style={styles.logoContainer}>
      <Image
      style={styles.logo}
      source={require('../../assets/funlearnlogo.png')}/>
      </View>
      <View style={styles.logoContainer}></View>


      </View>

    );


}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#3498db'
  },
  logoContainer: {
    flexGrow:1,
    alignItems: 'center',
    justifyContent : 'center'
  },
  logo: {
    width:200,
    height:200
  },
  title: {
    color: '#FFF',
    marginTop: 10,
    width: 160,
    textAlign: 'center',
    opacity: 0.9
  }
});

export default LoginScreen;
