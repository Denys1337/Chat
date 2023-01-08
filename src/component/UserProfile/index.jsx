import React from 'react';
import { useSelector } from 'react-redux';
// components
import { PopupMenu } from "react-simple-widgets";
import Login from '../Login/Login';
//styles
import styles from "./UserProfile.module.scss";

const UserProfile = () => {
  const user = useSelector(state => state.user.user);
  return (
    <div>
      <PopupMenu>
        {user ?
          <button className={styles.buttonProfile}>
            <small> My Account</small>
          </button>
          : ''
        }

          <div className={styles.wrapperModal}>
            <div>
              <div className={styles.wrapperModal__circleAvatar}>
                {user ? <img src={user.photoURL} alt='' /> : <Login />}
              </div>

            <h5 className={styles.wrapperModal__nameUser}>{user ? user.displayName : ''}</h5>
              <p className={styles.wrapperModal__emailUser}>{user ? user.email : ''}</p>

              <hr />

              <p
                className={styles.wrapperModal__titleRole}
                style={{ color: "#bebebe", fontWeight: "bold", fontSize: 12 }}
              >
                ROLES
              </p>
              <p style={{ fontSize: 14 }} className={styles.wrapperModal__ContentRole}>
                {["Submitter", "Project manager", "Change control board"].join(
                  ", "
                )}
              </p>
              <div
                className={styles.wrapperModal__groupList}
                style={{ margin: "0 -24px 0" }}
              >
                <button className={styles.wrapperModal__groupList__item}>
                  <small>Change Requests</small>
                </button>
                <button className={styles.wrapperModal__groupList__item}>
                  <small>Pending Requests</small>
                </button>
                <button className={styles.wrapperModal__groupList__item}>
                  <small>Other Requests</small>
                </button>
              </div>

              <div className={styles.wrapperModal__buttonContainer}>
                <button className={styles.wrapperModal__buttonContainer__logout}>
                  <small>Logout</small>
                </button>
              </div>
            </div>
          </div>
        </PopupMenu>
      </div>
  )
}

export default UserProfile