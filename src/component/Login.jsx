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
    </div>
  )
}

export default Login 