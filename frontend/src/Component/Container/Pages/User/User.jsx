import './_User.scss'
import ProgressBar from 'react-bootstrap/ProgressBar';
import { useState,useEffect } from 'react';
function User() {
    const [now, setNow] = useState(0);

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