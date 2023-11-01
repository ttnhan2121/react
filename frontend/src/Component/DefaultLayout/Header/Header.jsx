import { Link } from 'react-router-dom'
import "./_Header.scss"
import React from 'react'
import Logo515 from '../../../assets/img/icon515.png'
// import SubNav from "./SubNav/SubNav";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
function Header() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
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
                        <Link to={'/'} className='navbar-list navbar-itemfunc'>
                            HOME
                        </Link>
                        <Link to={'/shop'} className='navbar-list navbar-itemfunc'>
                            SHOP
                            {/* <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="Iconly/Regular/Outline/Arrow - Down 2">
                            <g id="Arrow - Down 2">
                            <path id="Stroke 1" d="M2.97982 5.31319C3.15733 5.13568 3.43511 5.11955 3.63085 5.26478L3.68693 5.31319L8.00004 9.62608L12.3132 5.31319C12.4907 5.13568 12.7684 5.11955 12.9642 5.26478L13.0203 5.31319C13.1978 5.49071 13.2139 5.76848 13.0687 5.96422L13.0203 6.0203L8.35359 10.687C8.17608 10.8645 7.89831 10.8806 7.70257 10.7354L7.64649 10.687L2.97982 6.0203C2.78456 5.82504 2.78456 5.50846 2.97982 5.31319Z" fill="#0F5BFF"/>
                            </g>
                            </g>
                            </svg> */}
                            {/* <SubNav></SubNav> */}
                        </Link>
                        <Link to={'/about'} className='navbar-list navbar-itemfunc'>
                            ABOUT
                        </Link>
                    </ul>
                    <ul className="navbar-list user-tab">
                        <span className='search'>
                            <svg width="27" height="27" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M4.00244 10.5815C4.00244 6.70046 7.16044 3.54346 11.0414 3.54346C14.9214 3.54346 18.0794 6.70046 18.0794 10.5815C18.0794 14.4625 14.9214 17.6205 11.0414 17.6205C7.16044 17.6205 4.00244 14.4625 4.00244 10.5815ZM22.4974 21.0405L17.8984 16.4535C19.2544 14.8725 20.0794 12.8235 20.0794 10.5815C20.0794 5.59846 16.0244 1.54346 11.0414 1.54346C6.05744 1.54346 2.00244 5.59846 2.00244 10.5815C2.00244 15.5655 6.05744 19.6205 11.0414 19.6205C13.0634 19.6205 14.9264 18.9445 16.4334 17.8175L21.0854 22.4565L22.4974 21.0405Z" fill="#0F5BFF"/>
                            </svg>
                        </span>
                        <Link to = {'/login'}>
                            <svg width="27" height="27" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M17.294 7.29117C17.294 10.2282 14.9391 12.5832 12 12.5832C9.0619 12.5832 6.70601 10.2282 6.70601 7.29117C6.70601 4.35415 9.0619 2.00012 12 2.00012C14.9391 2.00012 17.294 4.35415 17.294 7.29117ZM12 22.0001C7.66237 22.0001 4 21.2951 4 18.5751C4 15.8541 7.68538 15.1741 12 15.1741C16.3386 15.1741 20 15.8791 20 18.5991C20 21.3201 16.3146 22.0001 12 22.0001Z" fill="#0F5BFF"/>
                            </svg>
                        </Link>
                        <Button variant="primary" onClick={handleShow}>
                            <svg width="27" height="27" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M14.1213 11.2332H16.8891C17.3088 11.2332 17.6386 10.8863 17.6386 10.4679C17.6386 10.0392 17.3088 9.70248 16.8891 9.70248H14.1213C13.7016 9.70248 13.3719 10.0392 13.3719 10.4679C13.3719 10.8863 13.7016 11.2332 14.1213 11.2332ZM20.1766 5.92762C20.7861 5.92762 21.1858 6.14192 21.5855 6.61136C21.9852 7.08079 22.0551 7.75433 21.9652 8.36561L21.0159 15.0602C20.8361 16.347 19.7569 17.2951 18.4879 17.2951H7.58639C6.25742 17.2951 5.15828 16.2552 5.04837 14.9081L4.12908 3.78353L2.62026 3.51819C2.22057 3.44676 1.94079 3.04876 2.01073 2.64056C2.08068 2.22317 2.47038 1.94661 2.88006 2.00886L5.2632 2.37522C5.60293 2.43747 5.85274 2.7222 5.88272 3.06917L6.07257 5.35511C6.10254 5.68269 6.36234 5.92762 6.68209 5.92762H20.1766ZM7.42631 18.908C6.58697 18.908 5.9075 19.6019 5.9075 20.4592C5.9075 21.3062 6.58697 22.0001 7.42631 22.0001C8.25567 22.0001 8.93514 21.3062 8.93514 20.4592C8.93514 19.6019 8.25567 18.908 7.42631 18.908ZM18.6676 18.908C17.8282 18.908 17.1487 19.6019 17.1487 20.4592C17.1487 21.3062 17.8282 22.0001 18.6676 22.0001C19.4969 22.0001 20.1764 21.3062 20.1764 20.4592C20.1764 19.6019 19.4969 18.908 18.6676 18.908Z" fill="#0F5BFF"/>
                            </svg>
                        </Button>
                        <Offcanvas className='offcanvass' show={show} onHide={handleClose} placement='end'>
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title></Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <div className='body'>
                                    <svg width="50" height="50" viewBox="0 0 24 24" fill="#none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M14.1213 11.2332H16.8891C17.3088 11.2332 17.6386 10.8863 17.6386 10.4679C17.6386 10.0392 17.3088 9.70248 16.8891 9.70248H14.1213C13.7016 9.70248 13.3719 10.0392 13.3719 10.4679C13.3719 10.8863 13.7016 11.2332 14.1213 11.2332ZM20.1766 5.92762C20.7861 5.92762 21.1858 6.14192 21.5855 6.61136C21.9852 7.08079 22.0551 7.75433 21.9652 8.36561L21.0159 15.0602C20.8361 16.347 19.7569 17.2951 18.4879 17.2951H7.58639C6.25742 17.2951 5.15828 16.2552 5.04837 14.9081L4.12908 3.78353L2.62026 3.51819C2.22057 3.44676 1.94079 3.04876 2.01073 2.64056C2.08068 2.22317 2.47038 1.94661 2.88006 2.00886L5.2632 2.37522C5.60293 2.43747 5.85274 2.7222 5.88272 3.06917L6.07257 5.35511C6.10254 5.68269 6.36234 5.92762 6.68209 5.92762H20.1766ZM7.42631 18.908C6.58697 18.908 5.9075 19.6019 5.9075 20.4592C5.9075 21.3062 6.58697 22.0001 7.42631 22.0001C8.25567 22.0001 8.93514 21.3062 8.93514 20.4592C8.93514 19.6019 8.25567 18.908 7.42631 18.908ZM18.6676 18.908C17.8282 18.908 17.1487 19.6019 17.1487 20.4592C17.1487 21.3062 17.8282 22.0001 18.6676 22.0001C19.4969 22.0001 20.1764 21.3062 20.1764 20.4592C20.1764 19.6019 19.4969 18.908 18.6676 18.908Z" fill="#0F5BFF"/>
                                    </svg>
                                </div>
                                <h5 className='text-cart'>Giỏ hàng đang trống</h5>
                                <Link className='btn-body' to={'/shop'} role='button' onClick={handleClose} variant="secondary">Tiếp tục mua hàng</Link>
                            </Offcanvas.Body>
                        </Offcanvas>
                    </ul>
                </nav>
            </div>
        </header>
     );
}

export default Header;