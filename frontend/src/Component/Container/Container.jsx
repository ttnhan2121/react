import { Routes, Route } from 'react-router-dom';
import LoginPage from './Pages/LoginPage/LoginPage'
import RegisterPage from './Pages/RegisterPage/RegisterPage'
import MainPage from './Pages/MainPage/MainPage'
import AboutPage from './Pages/AboutPage/AboutPage';
import ShopPage from './Pages/ShopPage/ShopPage';
import ChinhSachBaoMat from './Pages/ChinhSachBaoMat/ChinhSachBaoMat';
import ChinhSachDoiTra from './Pages/ChinhSachDoiTra/ChinhSachDoiTra';
import DieuKhoanDichVu from './Pages/DieuKhoanDichVu/DieuKhoanDichVu';
import ChinhSachVanChuyen from './Pages/ChinhSachVanChuyen/ChinhSachVanChuyen'
import User from './Pages/User/User';
import ForgotPW from './Pages/ForgotPW/ForgotPW';
import './_Container.scss'
import CartPage from './Pages/CartPage/CartPage';
import Product from './Pages/Product/Product';
function Container() {
    return ( 
        <div className='container'>
            <Routes>
                <Route path='/' element = {<MainPage/>}/>
                <Route path='/login' element = {<LoginPage/>}/>
                <Route path='/register' element = {<RegisterPage/>}/>
                <Route path='/forgotpw' element = {<ForgotPW/>}/>
                <Route path='/about' element = {<AboutPage/>}/>
                <Route path='/product/:id' element = {<Product/>}/>
                <Route path='/shop' element = {<ShopPage/>}/>
                <Route path='/cart' element = {<CartPage/>}/>
                <Route path='/user' element = {<User/>}/>
                <Route path='/chinh-sach-doi-tra' element = {<ChinhSachDoiTra/>}/>
                <Route path='/chinh-sach-bao-mat' element = {<ChinhSachBaoMat/>}/>
                <Route path='/chinh-sach-van-chuyen' element = {<ChinhSachVanChuyen/>}/>
                <Route path='/dieu-khoan-dich-vu' element = {<DieuKhoanDichVu/>}/>
            </Routes>
           
        </div>
    );
}

export default Container;