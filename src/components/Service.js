import React from 'react';
import {useSelector} from 'react-redux';
import Navbar from './Navbar';
import './Common.css';

const Service = () => {

    const isLight = useSelector((state)=>state.isLight);

    return(
        <div className={isLight?'light' : 'dark'}>
        <Navbar />
        <h2>Our Service are not available currently.</h2>
        </div>
    );
}

export default Service;