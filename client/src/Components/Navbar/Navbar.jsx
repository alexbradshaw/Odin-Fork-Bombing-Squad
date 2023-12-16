import './Navbar.css'

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

import { authCheck, logout } from '../../utils/API';

const Navbar = () => {

    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        if (localStorage.getItem("auth") != null && authCheck()) {
            setLoggedIn(true);
        } else {
            setLoggedIn(false);
        }
    })

    const signOut = async () => {
        try {
            const resOk = await logout();
            if (resOk) {
                location.assign('/');
                localStorage.removeItem("auth");
            }
        } catch (e) {
            console.log('Something went wrong with logout!')
            console.log('Message: ', e.message);
        }
    }

    return (
        <div className='nav'>
            <Link to='/'>
                <img src="/transparent.png" alt="SAVY logo" className='navImage'/>
            </Link>
            <div className='rightNav'>
                <Link to="/sellItem">Sell</Link>
                <Link to="/listings">Profile</Link>
                {loggedIn ? <Link className='logout' onClick={signOut} >Log Out</Link> : <Link to="/login">Log In</Link>}
                <Link to='/checkout'>
                    <Icon icon="ion:cart-sharp" width={25} color='black'/>
                </Link>
            </div>
        </div>
    );
}

export default Navbar;