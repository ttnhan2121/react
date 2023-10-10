import { Routes, Route } from 'react-router-dom';
import LoginPage from './Pages/LoginPage/LoginPage'
import RegisterPage from './Pages/RegisterPage/RegisterPage'
import MainPage from './Pages/MainPage/MainPage'
import AboutPage from './Pages/AboutPage/AboutPage';
import ShopPage from './Pages/ShopPage/ShopPage';
import ChinhSachBaoMat from './Pages/ChinhSachBaoMat/ChinhSachBaoMat';
import ChinhSachDoiTra from './Pages/ChinhSachDoiTra/ChinhSachDoiTra';
import DieuKhoanDichVu from './Pages/DieuKhoanDichVu/DieuKhoanDichVu';
import ForgotPW from './Pages/ForgotPW/ForgotPW';
import './_Container.scss'
function Container() {
    return ( 
        <div className='container'>
            <Routes>
                <Route path='/' element = {<MainPage/>}></Route>
                <Route path='/login' element = {<LoginPage/>}></Route>
                <Route path='/register' element = {<RegisterPage/>}></Route>
                <Route path='/forgotpw' element = {<ForgotPW/>}></Route>
                <Route path='/about' element = {<AboutPage/>}></Route>
                <Route path='/shop' element = {<ShopPage/>}></Route>
                <Route path='/chinh-sach-doi-tra' element = {<ChinhSachDoiTra/>}></Route>
                <Route path='/chinh-sach-bao-mat' element = {<ChinhSachBaoMat/>}></Route>
                <Route path='/dieu-khoan-dich-vu' element = {<DieuKhoanDichVu/>}></Route>

            </Routes>
           
        </div>
    );
}

export default Container;