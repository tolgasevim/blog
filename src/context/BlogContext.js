import React, { useReducer } from 'react';
import createDataContext from './createDataContext';



const blogReducer = (state, action) => {
  switch(action.type){
    case 'addBlogPost':
      return [...state, {id: Math.floor(Math.random() * 99999) ,
         title: action.payload.title,
         content: action.payload.content
       }];
       console.log(title);
    case 'editBlogPost':

         return state;
    case 'deleteBlogPost':
      return state.filter((blogPost)=> blogPost.id !== action.payload);
    default:
      return state;
  };
};

const addBlogPost = dispatch => {
  return (title, content, callback) => {
    dispatch ({ type : 'addBlogPost', payload: {title, content} });
    callback();
  };
};
const editBlogPost = dispatch => {
  return (id, title, content, callback) => {
    dispatch ({ type : 'editBlogPost', payload: {id, title, content} });
    callback();
  };
};
const deleteBlogPost = dispatch => {
  return (id) => {
    dispatch ({ type : 'deleteBlogPost', payload: id });
  };
};


export const { Context, Provider } = createDataContext(blogReducer, { addBlogPost, editBlogPost, deleteBlogPost }, [{id: "11" , title:"title", content:"content"}]);
