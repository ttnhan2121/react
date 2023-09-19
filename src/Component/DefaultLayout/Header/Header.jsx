import "./_Header.scss"
function Header() {
    return ( 
        <header className="header">
            <div className="grid">
                <nav className="navbar">
                    <ul className="navbar-list logo">
                        <img src= "../../../assets/img/icon515.png" alt="Logo" width={40}/>
                        <ul className="logo">
                            <li className="navbar-item">Area 515</li>
                            <li className="navbar-item">Happy Mine Happy Life</li>
                        </ul>
                        
                    </ul>
                    <ul className="navbar-list">
                        <li className="navbar-itemfunc">
                            HOME
                        </li>
                        <li className="navbar-itemfunc">
                            SHOP
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