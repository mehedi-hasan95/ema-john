import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg'
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';

const Header = () => {
    const { user, setUser, logOut } = useContext(AuthContext);
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <div className="menu">
                <NavLink to="/">Shop</NavLink>
                <NavLink to="/order">Order</NavLink>
                <NavLink to="/inventory">Inventory</NavLink>
                {
                    user?.uid ? 
                    <NavLink onClick={logOut} to="/login">Log Out</NavLink>
                    :
                        <>
                            <NavLink to="/login">Login</NavLink>
                            <NavLink to="/register">Register</NavLink>
                        </>
                }
            </div>
        </div>
    );
};

export default Header;