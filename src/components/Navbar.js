import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {setIsLight} from '../slice';

const Navbar = () => {

    const isLight = useSelector((state)=>state.isLight);

    const dispatch = useDispatch()

    return(
        <>
        <h1>Geekster</h1>
        <Link to="/">Home</Link>
        <br />
        <Link to="/contact">Contact</Link>
        <br />
        <Link to="/service">Service</Link>
        <br />
        <br />
        <button onClick={()=>{dispatch(setIsLight())}}>Toggle Theme to {isLight?"Dark":"Light"}</button>
         
        </>
    )
}

export default Navbar;