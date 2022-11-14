import React from 'react';
import Navbar from './Navbar';
import './Common.css';
import {useSelector} from 'react-redux';

const Contact = () => {

    const isLight = useSelector((state)=>state.isLight);

    return(
        <div className={isLight?'light' : 'dark'}>
        <Navbar  />
        <h4>CONTACT US</h4>
        <h2>You can mail us at help@geekster.in</h2>
        </div>
    )
}

export default Contact;