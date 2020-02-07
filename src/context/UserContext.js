import React, { useReducer } from 'react';
import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

const userReducer = (state, action) => {
  switch(action.type){
    case 'getUsers':
      return action.payload;
    default:
      return state;
  };
};

const  getUsers = dispatch => {
  return async () => {
    const response = await jsonServer.get('/users/');
    dispatch({ type : 'getUsers', payload: response.data });
  };
};



export const { Context, Provider } = createDataContext( userReducer, { getUsers  }, []);
