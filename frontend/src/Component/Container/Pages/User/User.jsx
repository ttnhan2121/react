import './_User.scss'
import ProgressBar from 'react-bootstrap/ProgressBar';
import { useState,useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket, faFilePen,faFloppyDisk } from '@fortawesome/free-solid-svg-icons';
import { Button, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Toast from 'react-bootstrap/Toast';
function User() {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [dataInvoice, setDataInvoice] = useState([]);
    const [now, setNow] = useState(0);
    const [edit, setEdit] = useState(false);
    const [showDetail, setShowDetail] = useState(false);
    const userId = localStorage.getItem('userId');
    const [show, setShow] = useState(false);
    const [message, setMessage] = useState('');
    const [selectedInvoiceId, setSelectedInvoiceId] = useState(0);
    const [invoice_details, setinvoice_details] = useState([]);
    const handleShowToast = () =>{
        setShow(false);
    }
    const handleLogout = () => {
        localStorage.setItem("isLoggedIn",false);
        localStorage.setItem("userId", null);
        navigate('/');
    }
    const loadinfoUser = async () => {
        try {
          const response = await fetch(`http://localhost:8000/user/${userId}`);
          const result = await response.json();
          setData(result);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
    };
    const loadInvoice = async () => {
        try {
            const response = await fetch(`http://localhost:8000/invoice/${userId}`);
            const result = await response.json();
            setDataInvoice(result);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
    }
    
    useEffect(() => {
        loadinfoUser();
        loadInvoice();
    }, []);
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
              loadinfoUser();
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
    const handleShowDetails = (invoice_id) =>{
        setSelectedInvoiceId(invoice_id);
        const loadInvoiceDetails = async () => {
            try {
                const response = await fetch(`http://localhost:8000/invoice_details/${invoice_id}`);
                const result = await response.json();
                setinvoice_details(result);
            } catch (error) {
                console.error('Error fetching data:', error);
              }
        }
        loadInvoiceDetails();
        setShowDetail(true);
    }
    const handleCloseDetails = () => {
        setShowDetail(false);
    }
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
            <Modal show={showDetail} onHide={handleCloseDetails} centered>
                <Modal.Header closeButton>
                <Modal.Title>Chi tiết hóa đơn {selectedInvoiceId}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <table style={{width: '100%'}}>
                        <tr>
                            <td>STT</td>
                            <td>Sản phẩm</td>
                            <td>Số lượng</td>
                            <td>Kích thước</td>
                        </tr>
                        {invoice_details.map((item, index)=>(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{item.product_id}</td>
                                <td>{item.quantity}</td>
                                <td>{item.size === 1 ? "M" : item.size === 2 ? "L" : "XL"}</td>
                            </tr>
                        ))}
                    </table>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseDetails}>
                    Đóng
                </Button>
                </Modal.Footer>
            </Modal>
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
                        {dataInvoice.map((item,index)=>(
                            <tr key={index}>
                                <td><p onClick={() => handleShowDetails(item.invoice_id)}>{item.invoice_id}</p></td>
                                <td>{new Date(item.purchase_date).toLocaleDateString()}</td>
                                <td>{item.order_status}</td>
                                <td>{item.shipping_status}</td>
                                <td>{Number(item.total_amount).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</td>
                            </tr>
                        ))}
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
                            <span className="me-auto" style={{fontSize: '1.5rem'}}>Hệ thống</span>
                        </Toast.Header>
                        <Toast.Body style={{fontSize: '1.5rem'}}>{message}</Toast.Body>
                    </Toast>
                </div>
            </div>
        </div>
    );
}

export default User;