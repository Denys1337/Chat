import React from 'react';
import { signInWithGoogle } from '../../service/firebase';
// styles
import styles from './Login.module.scss';
// images
import { ReactComponent as GoogleIcon} from '../../assets/images/GoogleIcon.svg'

const Login = () => {
    
  return (
    <div className={styles.SingIn}>
        <button onClick={signInWithGoogle}><i><GoogleIcon/></i>Sign in with google</button>
    </div>
  )
}

export default Login;
