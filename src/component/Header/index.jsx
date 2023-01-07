import React from 'react';
import { useSelector } from 'react-redux';
//component
import Login from '../Login/Login';
// styles
import styles from './Header.module.scss';

const Header = () => {
  const user = useSelector(state => state.user.user);
  return (
    <div className={styles.wrapper}>
      <h1>Chat-webSocket</h1>
      {user ? <img src={user.photoURL} alt=''/> : <Login/>}
    </div>
  )
}

export default Header;
