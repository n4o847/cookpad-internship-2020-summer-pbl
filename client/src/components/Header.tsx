import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <Link to="/">みんなのレシピ</Link>
      {' | '}
      <Link to="/tags">見つける</Link>
      {' | '}
      ログイン
    </div>
  );
}

export default Header;
