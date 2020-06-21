import React from 'react';
import '../styles/header.css';
import { ReactComponent as Logo } from '../assets/logo-endless.svg';

const Header = () =>
    <header>
       <Logo className='logo' />
    </header>;

export default Header;