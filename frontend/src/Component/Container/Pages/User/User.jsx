import './_User.scss'
import ProgressBar from 'react-bootstrap/ProgressBar';
import { useState,useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
function User() {
    const navigate = useNavigate();
    const [now, setNow] = useState(0);
    const handleLogout = () => {
        localStorage.setItem("isLoggedIn",false);
        navigate('/');
    }
    useEffect(() => {
        const interval = setInterval(() => {
        setNow(prevNow => {
            const newNow = prevNow + 1;
            if (newNow === 100) {
            clearInterval(interval);
            }
            return newNow;
        });
        }, 10);
        return () => clearInterval(interval);
    }, []); 
    return (  
        <div className='user'>
            <div className='header-user'>
                <h1>Tài khoản của bạn</h1>
                <ProgressBar now={now} className='process'/>
                <Button variant='danger' className='btn-logout' onClick={handleLogout}>
                    <FontAwesomeIcon icon={faArrowRightFromBracket} />
                    Đăng xuất
                </Button>
            </div>
            <div className='body-user'>
                <div className='purchased'>
                    <h2>Lịch sử mua hàng</h2>
                    <table id='table-purchased'>
                        <tr>
                            <td>Mã đơn hàng</td>
                            <td>Ngày đặt hàng</td>
                            <td>Trạng thái đơn hàng</td>
                            <td>Trạng thái vận chuyển</td>
                            <td>Tổng tiền</td>
                        </tr>
                    </table>
                </div>
                <div className='address'>
                    <h2>Địa chỉ</h2>
                    <table id='user-info'>
                        <tr>
                            <td>Họ tên:</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>Email:</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>Số điện thoại:</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>Địa chỉ</td>
                            <td>1</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default User;