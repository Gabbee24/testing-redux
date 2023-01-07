import React from 'react'
import { useDispatch } from 'react-redux'
import { login, logout } from '../features/User';

const Login = () => {
    const dispatch = useDispatch();

  return (
    <div>
        <button 
            onClick={
                () => {dispatch(login({
                    name: 'Gabby', 
                    age: 22, 
                    email:'atunwagabriel@gmail.com'
                    }))}}>
            Login
        </button>
        
        <button onClick={() => {
            dispatch(logout());
        }}>
            LOGOUT
        </button>
        <p>
A confident computer Science graduate with self-taught tech skills such as web and mobile development using React and React-Native library.
</p>
    </div>
  )
}

export default Login 