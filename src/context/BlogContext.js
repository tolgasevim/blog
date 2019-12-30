import React, { useReducer } from 'react';
import createDataContext from './createDataContext';



const blogReducer = (state, action) => {
  switch(action.type){
    case 'addBlogPost':
    return [...state, {id: Math.floor(Math.random() * 99999) ,  title: `BlogPost #${state.length +1}`}];
     default:
     return state;
  };
};

const addBlogPost = dispatch => {
  return () => {
    dispatch ({ type : 'addBlogPost' });
  };
};

//dgferg

export const { Context, Provider } = createDataContext(blogReducer, { addBlogPost }, []);
