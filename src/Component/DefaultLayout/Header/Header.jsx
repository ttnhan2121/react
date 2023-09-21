import "./_Header.scss"
import React from 'react'
import Logo515 from '../../../assets/img/icon515.png'
import SubNav from "./SubNav/SubNav";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
function Header() {
    return ( 
        <header className="header">
            <div className="grid">
                <nav className="navbar">
                    <ul className="navbar-list logo">
                        <img src= {Logo515} alt="Logo" width={40}/>
                        <ul className="logo-text">
                            <li className="navbar-item logo-text-brand">Area 515</li>
                            <li className="navbar-item logo-text-caption">Happy Mine Happy Life</li>
                        </ul>
                        
                    </ul>
                    <ul className="navbar-list">
                        <li className="navbar-itemfunc">
                            HOME
                        </li>
                        <li className="navbar-itemfunc">
                            <div>
                                SHOP
                                <FontAwesomeIcon icon={faChevronDown} />
                            </div>
                            <SubNav></SubNav>
                        </li>
                        <li className="navbar-itemfunc">
                            ABOUT
                        </li>
                    </ul>
                    <ul className="navbar-list">
                        <button className="navbar-button button-signup"> Đăng ký </button>
                        <button className="navbar-button button-login"> Đăng nhập </button>
                    </ul>
                </nav>
            </div>
        </header>
     );
}

export default Header;