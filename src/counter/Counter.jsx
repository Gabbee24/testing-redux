import React from 'react';
import Button from './Button';
import './counter.css'

const Counter = () => {
    const styleMainFrame = {
        marginTop : '20px',
    }
  return (
    <div className='mainFrame'>
        <h2><b>Days Since Last Incident</b></h2>
        <h1 style={styleMainFrame}>0</h1>
        <div style={styleMainFrame} className="btnD">
            <Button
                text='Decrement'
            />
            <Button
                text='Reset'
            />
            <Button
                text='Increment'
            />
        </div>
    </div>
  )
}

export default Counter