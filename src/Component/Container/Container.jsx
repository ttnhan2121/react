import { Routes, Route } from 'react-router-dom';
import LoginPage from './Pages/LoginPage/LoginPage'
import RegisterPage from './Pages/RegisterPage/RegisterPage'
import MainPage from './Pages/MainPage/MainPage'
import AboutPage from './Pages/AboutPage/AboutPage';
function Container() {
    return ( 
        <div className='container'>
            <Routes>
                <Route path='/' element = {<MainPage/>}></Route>
                <Route path='/login' element = {<LoginPage/>}></Route>
                <Route path='/register' element = {<RegisterPage/>}></Route>
                <Route path='/about' element = {<AboutPage/>}></Route>
            </Routes>
           
        </div>
    );
}

export default Container;