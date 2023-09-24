import { Routes, Route } from 'react-router-dom';
import LoginPage from './Pages/LoginPage/LoginPage'
import RegisterPage from './Pages/RegisterPage/RegisterPage'
import MainPage from './Pages/MainPage/MainPage'
import AboutPage from './Pages/AboutPage/AboutPage';
import ChinhSachBaoMat from './Pages/ChinhSachBaoMat/ChinhSachBaoMat';
import ChinhSachDoiTra from './Pages/ChinhSachDoiTra/ChinhSachDoiTra';
import DieuKhoanDichVu from './Pages/DieuKhoanDichVu/DieuKhoanDichVu';
function Container() {
    return ( 
        <div className='container'>
            <Routes>
                <Route path='/' element = {<MainPage/>}></Route>
                <Route path='/login' element = {<LoginPage/>}></Route>
                <Route path='/register' element = {<RegisterPage/>}></Route>
                <Route path='/about' element = {<AboutPage/>}></Route>
                <Route path='/chinh-sach-doi-tra' element = {<ChinhSachDoiTra/>}></Route>
                <Route path='/chinh-sach-bao-mat' element = {<ChinhSachBaoMat/>}></Route>
                <Route path='/dieu-khoan-dich-vu' element = {<DieuKhoanDichVu/>}></Route>
            </Routes>
           
        </div>
    );
}

export default Container;