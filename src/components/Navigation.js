import React from 'react';
import { Link } from 'react-router-dom';


const Navigation = () => {
  return (
    <div>
      <ul className='navbar'>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/about'>About</Link>
      </li>
      <li>
        <Link to='/contact'>Contact</Link>
      </li>
    </ul>
    </div>
  );
};

export default Navigation;