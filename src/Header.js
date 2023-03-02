import React from 'react';
import { Link } from 'react-router-dom';
import "./header.css"

const Header = () => {
  return (
    <>
      <header>
        <div><img src="logo192.png" alt="" />REACT</div> 
        <nav>
          <Link to="/">jsx</Link>
          <Link to="/state">state</Link>
          <Link to="/price">price</Link>
          <Link to="/heros">hero</Link>
          <Link to="/counter">counter</Link>
          <Link to="/form">form</Link>
          <Link to="/cycle">cycle</Link>
          <Link to="/parent">parent</Link>
          <Link 
          to={{ pathname: `article/${1}`}}
          state={{title: "Page article"}}
            >article</Link>
        </nav>
      </header>
    </>
  );
};

export default Header;