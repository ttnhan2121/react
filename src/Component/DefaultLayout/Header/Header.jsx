import { Link } from 'react-router-dom'
import "./_Header.scss"
import React from 'react'
import Logo515 from '../../../assets/img/icon515.png'
import SubNav from "./SubNav/SubNav";
function Header() {
    return ( 
        <header className="header">
            <div className="grid">
                <nav className="navbar">
                    <ul className="navbar-list logo">
                        <Link to={'/'} className='navbar-list'>
                            <img src= {Logo515} alt="Logo" width={40}/>
                            <ul className="logo-text">
                                <li className="navbar-item logo-text-brand">Area 515</li>
                                <li className="navbar-item logo-text-caption">Happy Mine Happy Life</li>
                            </ul>
                        </Link>
                    </ul>
                    <ul className="navbar-list">
                        <Link to={'/'} className='navbar-list'>
                            <li className="navbar-itemfunc">
                                HOME
                            </li>
                        </Link>
                        <Link to={''} className='navbar-list'>
                            <li className="navbar-itemfunc">
                                SHOP
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="Iconly/Regular/Outline/Arrow - Down 2">
                                <g id="Arrow - Down 2">
                                <path id="Stroke 1" d="M2.97982 5.31319C3.15733 5.13568 3.43511 5.11955 3.63085 5.26478L3.68693 5.31319L8.00004 9.62608L12.3132 5.31319C12.4907 5.13568 12.7684 5.11955 12.9642 5.26478L13.0203 5.31319C13.1978 5.49071 13.2139 5.76848 13.0687 5.96422L13.0203 6.0203L8.35359 10.687C8.17608 10.8645 7.89831 10.8806 7.70257 10.7354L7.64649 10.687L2.97982 6.0203C2.78456 5.82504 2.78456 5.50846 2.97982 5.31319Z" fill="#0F5BFF"/>
                                </g>
                                </g>
                                </svg>
                                <SubNav></SubNav>
                            </li>
                        </Link>
                        <Link to={'/about'} className='navbar-list'>
                            <li className="navbar-itemfunc">
                                ABOUT
                            </li>
                        </Link>
                    </ul>
                    <ul className="navbar-list">
                        <Link to = {'/register'}><button className="navbar-button button-signup"> Đăng ký </button></Link>
                        <Link to = {'/login'}><button className="navbar-button button-login"> Đăng nhập </button></Link>
                    </ul>
                </nav>
            </div>
        </header>
     );
}

export default Header;