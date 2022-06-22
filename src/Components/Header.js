import React from 'react';
import { Link } from 'react-router-dom';
import { BiMicrophone } from 'react-icons/bi';
import { RiSettings5Line } from 'react-icons/ri';

const Header = () => (
  <nav>
    <Link to="/">Home</Link>
    <h2>Metric App</h2>
    <div>
      <BiMicrophone />
      <RiSettings5Line />
    </div>
  </nav>
);

export default Header;
