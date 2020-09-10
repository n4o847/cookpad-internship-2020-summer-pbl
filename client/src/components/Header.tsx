import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <Link to="/">みんなのレシピ</Link>
      {' | '}
      <Link to="/tags">見つける</Link>
    </div>
  );
}

export default Header;
