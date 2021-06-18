import React from 'react';
import loginlogo from './gmail.jpg';
import { Button,IconButton } from '@material-ui/core';
import './login.css';
import { auth, provider } from './firebase';
import { useDispatch } from 'react-redux';
import { login } from '../features/counter/userSlice';

const Login = () => {

    const dispatch = useDispatch();

    const signIn = () => {
       auth.signInWithPopup(provider)
       .then(({user}) =>{
           dispatch(login({
               displayName : user.displayName,
               email : user.email,
               photoUrl : user.photoURL
           }))
       })
       .catch (error => alert(error.message));
    };

    return ( 
        <div className = "login">
           <div className = "login__container">
              <img src ={loginlogo} alt = "login" />
              <Button
                 variant = "contained"
                 color = "primary"
                 onClick = {signIn}
               >Login</Button>
           </div>
        </div>
     );
}
 
export default Login;