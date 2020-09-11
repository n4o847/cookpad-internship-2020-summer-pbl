import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faCalendar,
  faHashtag,
  faHome,
  faSignInAlt
} from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <div className="header">
      <div className="header-bar">
        <div className="header-title">
          {"タイトル"}
        </div>
        <div className="header-button">
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
      <Link to="/" className="header-item">
        <div className="header-item-icon">
          <FontAwesomeIcon icon={faHome} />
        </div>
        <div className="header-item-caption">
          みんなのレシピ
        </div>
      </Link>
      <Link to="/tags" className="header-item">
        <div className="header-item-icon">
          <FontAwesomeIcon icon={faHashtag} />
        </div>
        <div className="header-item-caption">
          見つける
        </div>
      </Link>
      <Link to="/" className="header-item">
        <div className="header-item-icon">
          <FontAwesomeIcon icon={faCalendar} />
        </div>
        <div className="header-item-caption">
          記録を見る
        </div>
      </Link>
      <Link to="/" className="header-item">
        <div className="header-item-icon">
          <FontAwesomeIcon icon={faSignInAlt} />
        </div>
        <div className="header-item-caption">
          ログイン
        </div>
      </Link>
    </div>
  );
}

export default Header;
