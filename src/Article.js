import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

const Article = () => {
const params = useParams()
const {id} = params
const location = useLocation()
console.log(location);
const {title} = location.state

  return (
    <>
     <h1>{title} n°{id}</h1>
    </>
  );
};

export default Article;