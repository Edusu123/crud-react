import React from 'react'
import logo from '../../assets/img/logo.png'
import './Logo.css'

export default props =>
    <aside className="logo">
        <a className="logo" href="/">
            <img src={logo} alt="logo" />
        </a>
    </aside>
