import { useEffect, useState } from 'react';
import firebase from "firebase/compat/app";
import { useDispatch } from 'react-redux';
// store
import { getUser } from './store/login-service/action';
// components
import Login from './component/Login/Login';
import Header from './component/Header';
// styles
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setUser(user);
    });
  }, []);

  const userData = user && user.multiFactor.user;

  useEffect(() => {
    dispatch(getUser(userData))
  }, [userData])

  return (
    <div className="App">
      <Header />
      {!user ? <Login /> : `Hello ${userData.displayName}`}

    </div>
  );
}

export default App;
