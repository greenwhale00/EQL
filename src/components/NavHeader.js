import React from 'react'
import { Link } from 'react-router-dom';
import '../css/Main.scss'
import NavMenu from './NavMenu';

const NavHeader = () => {
    return (
        <header className='NavHeader'>
            <nav>
                <NavMenu />
            </nav>
        </header>
    )
}

export default NavHeader