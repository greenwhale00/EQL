import React from 'react'
import { Link } from 'react-router-dom'
import "../css/TopBanner.scss"



const TopBanner = () => {
    return (
        <div className='TopBanner'>
            <p className='blink'>10월 가입하고 첫 구매시 20% 쿠폰</p>
        </div>
    )
}

export default TopBanner