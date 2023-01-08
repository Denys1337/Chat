import React from 'react';
import UserProfile from '../UserProfile';
//component

// styles
import styles from './Header.module.scss';

const Header = () => {
  

  return (
    <div className={styles.wrapper}>
      <h1>Chat-webSocket</h1>
      <div className={styles.wrapper__profile}>
       <UserProfile/>
      </div>
    </div>
  )
}

export default Header;
