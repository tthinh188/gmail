import { Button } from '@material-ui/core';
import React from 'react'
import { auth, provider } from './firebase';
import "./Login.css";
import { login }from './features/userSlice';
import { useDispatch } from 'react-redux';

function Login() {
    const dispatch = useDispatch();
    
    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(({user}) =>{
                dispatch(
                    login({
                        displayName: user.displayName,
                        email: user.email,
                        photoURL: user.photoURL,
                    })
                );

            })
            .catch(error => alert(error.message))
    }
    return (
        <div className="login">
            <div className="login_container">
                <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvDlIcLw9h8Tkbo_ytj4iP40RoGZ52hevCuQ&usqp=CAU"
                    alt =""
                />
                <Button 
                    variant="contained"
                    color="primary"
                    onClick={signIn}>Login</Button>
            </div>
        </div>
    )
}

export default Login
