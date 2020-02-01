import React, { useReducer } from 'react';
import createDataContext from './createDataContext';

import jsonServer from '../api/jsonServer';

const blogReducer = (state, action) => {
  switch(action.type){
    case 'getBlogPosts':
      return action.payload;

    case 'editBlogPost':
      return state.map( (blogpost)=> {
        if (blogpost.id===action.payload.id) {
        return action.payload;
      }
        else {
          return blogpost;
        }
      });

    case 'deleteBlogPost':
      return state.filter((blogPost)=> blogPost.id !== action.payload);

    default:
      return state;
  };
};

const  getBlogPosts = dispatch => {
  return async () => {
    const response = await jsonServer.get('/blogposts');
    dispatch({ type : 'getBlogPosts', payload: response.data });
  };
};

const addBlogPost = dispatch => {
  return async (title, content, callback) => {
    const response = await jsonServer.post('/blogposts/', {title, content});
    if (callback) callback();
  };
};
const editBlogPost = dispatch => {
  return async (id, title, content, callback) => {
    const response = await jsonServer.put( `/blogposts/${id}`, {title,content});
    
    dispatch ({ type : 'editBlogPost', payload: {id, title, content} });
    callback();
  };
};
const deleteBlogPost = dispatch => {
  return async (id) => {
    const response = await jsonServer.delete( `/blogposts/${id}`);
    dispatch ({ type : 'deleteBlogPost', payload: id });
  };
};


export const { Context, Provider } = createDataContext(blogReducer, { addBlogPost, editBlogPost, deleteBlogPost, getBlogPosts }, []);
