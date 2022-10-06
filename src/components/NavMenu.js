import React from 'react'
import { Link, NavLink } from 'react-router-dom';

const NAVLINK = [
    { content: "CAMPAIGN", link: "/campaign" },
    { content: "WOMEN", link: "/women" },
    { content: "MEN", link: "/men" },
    { content: "LIFE", link: "/life" },
    { content: "BRAND", link: "/brand" },
    { content: "EQL EXCLUSIVE", link: "/exclusive" },
    { content: "EVENT", link: "/event" },
    { content: "DISCOVER", link: "/dicover" },
]

const NavMenu = () => {
    return (
        <>
            <ul>
                {
                    NAVLINK.map((it, idx) => {
                        return (<li key={idx}><NavLink to={it.link}>{it.content}</NavLink></li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default NavMenu