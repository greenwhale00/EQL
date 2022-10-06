import React from 'react'
import { Link } from 'react-router-dom';
import '../css/Main.scss'

const LogoHeader = () => {
    return (
        <header className='LogoHeader'>
            <h1>
                <Link to='/'>
                    <img src={process.env.PUBLIC_URL + "/assets/images/logo.png"} alt="" />
                </Link>
            </h1>
        </header>
    )
}

export default LogoHeader