import './Navbar.css'

import { Icon } from '@iconify/react';

import { logout } from '../../utils/API';

const Navbar = () => {

    let bool = false;

    if (localStorage.getItem("auth") != null) {
        bool = true;
    }

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
            <a href='/'>
                <img src="/transparent.png" alt="SAVY logo" className='navImage'/>
            </a>
            <input type="text" placeholder='Search'/>
            <div className='rightNav'>
                <a href="/listings">Profile</a>
                {bool ? <a onClick={signOut} >Log Out</a> : <a href="/login">Log In</a>}
                <div><Icon icon="ion:cart-sharp" width={25} color='black'/></div>
            </div>
        </div>
    );
}

export default Navbar;