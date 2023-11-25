import './_User.scss'
import ProgressBar from 'react-bootstrap/ProgressBar';
import { useState,useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket, faFilePen,faFloppyDisk } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Toast from 'react-bootstrap/Toast';
function User() {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [now, setNow] = useState(0);
    const [edit, setEdit] = useState(false);
    const userId = localStorage.getItem('userId');
    const [show, setShow] = useState(false);
    const [message, setMessage] = useState('');
    const handleShowToast = () =>{
        setShow(false);
    }
    const handleLogout = () => {
        localStorage.setItem("isLoggedIn",false);
        navigate('/');
    }
    const loadUser = async () => {
        try {
          const response = await fetch(`http://localhost:8000/user/${userId}`);
          const result = await response.json();
          setData(result);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
    
    useEffect(() => {
    loadUser();
    }, [userId]);
    const handleEdit = () =>{
        setEdit(true);
    }
    const handleSave = async () => {
        try {
            const updatedUserData = {
              firstname: document.getElementById('input_firstname').value,
              lastname: document.getElementById('input_lastname').value,
              phone: document.getElementById('input_phone').value,
              address: document.getElementById('input_address').value,
            };
      
            const response = await fetch(`http://localhost:8000/user/${userId}/update`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(updatedUserData),
            });
      
      
            if (response.ok) {
              loadUser();
              setEdit(false); 
              setShow(true); 
              setMessage('Chỉnh sửa thông tin thành công'); 
            } else {
              setShow(true);
              setMessage(`Chỉnh sửa thông tin không thành công`); 
            }
          } catch (error) {
            console.error('Error updating user information:', error);
          }
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
                    <h2>Địa chỉ 
                        {edit ? (
                            <Button variant='info' onClick={handleSave} className='cssbtn'>
                            <FontAwesomeIcon icon={faFloppyDisk} />
                            <span> Lưu</span>
                            </Button>
                        ):(
                        <Button variant='light' onClick={handleEdit} className='cssbtn'>
                        <FontAwesomeIcon icon={faFilePen} />
                        <span> Chỉnh sửa</span>
                        </Button>
                        )}
                    </h2>
                    <table id='user-info'>
                        <tr>
                            <td>Họ:</td>
                            <td>
                                {edit ? (
                                    <input type='text' id='input_firstname' className='input-user' defaultValue={data.firstname || ''}></input>
                                ) : (
                                    <span>{data.firstname || ''}</span>
                                )}
                            </td>
                        </tr>
                        <tr>
                            <td>Tên:</td>
                            <td>
                                {edit ? (
                                    <input type='text' id='input_lastname' className='input-user' defaultValue={data.lastname || ''}></input>
                                ) : (
                                    <span>{data.lastname || ''}</span>
                                )}
                            </td>
                        </tr>
                        <tr>
                            <td>Email:</td>
                            <td>
                                <span>{data.email || ''}</span>
                            </td>
                        </tr>
                        <tr>
                            <td>Số điện thoại:</td>
                            <td>
                                {edit ? (
                                    <input type='text' id='input_phone' className='input-user' defaultValue={data.phone || ''}></input>
                                ) : (
                                    <span>{data.phone || ''}</span>
                                )}
                            </td>
                        </tr>
                        <tr>
                            <td>Địa chỉ</td>
                            <td>
                                {edit ? (
                                    <input type='text' id='input_address' className='input-user' defaultValue={data.address || ''}></input>
                                ) : (
                                    <span>{data.address || ''}</span>
                                )}
                            </td>
                        </tr>
                    </table>
                </div>
                <div className="toastbox">
                    <Toast show={show} onClose={handleShowToast} delay={5000} autohide>
                        <Toast.Header>
                            <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                            <strong className="me-auto">Hệ thống</strong>
                        </Toast.Header>
                        <Toast.Body>{message}</Toast.Body>
                    </Toast>
                </div>
            </div>
        </div>
    );
}

export default User;