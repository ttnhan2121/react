import './_CartPage.scss'
import ProgressBar from 'react-bootstrap/ProgressBar';
import { useState,useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { IncreaseQuantity, DecreaseQuantity, DeleteCart } from "../../../../action/action";

function CartPage({ items, IncreaseQuantity, DecreaseQuantity, DeleteCart}) {
    let ListCart = [];
    let TotalCart = 0;
    const [show, setShow] = useState(false);
    const [data, setData] = useState([]);
    const userId = localStorage.getItem("userId")
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    Object.keys(items.Carts).forEach(function (item) {
        TotalCart += items.Carts[item].quantity * items.Carts[item].price;
        ListCart.push(items.Carts[item]);
    });
    
    function TotalPrice(price, tonggia) {
        return Number(price * tonggia).toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
    }
    const [now, setNow] = useState(0);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(`http://localhost:8000/user/${userId}`);
            const result = await response.json();
            setData(result);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
      
        fetchData(); 
      
      }, [userId]);
    
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
    const handlePayment = () => {
        const cartDetailsArray = JSON.parse(localStorage.getItem('persist:root'))?._todoProduct && JSON.parse(JSON.parse(localStorage.getItem('persist:root'))._todoProduct)?.Carts?.map(cart => ({ id: cart.id, quantity: cart.quantity, size: cart.size }));
        console.log(cartDetailsArray[0].id);
    }
    if(TotalCart===0){
        return(
            <div className='cartpage'>
                <div className='header-cart'>
                    <h1> Giỏ hàng đang trống</h1>
                    <ProgressBar now={now} className='process'/>
                    <p className='icon'><FontAwesomeIcon icon={faCartShopping} /></p>
                    <Link to={"/shop"} className="btn-showall">
                        Tiếp tục mua hàng
                    </Link>
                </div>
            </div>
        );
    }
    return (  
        <div className='cartpage'>
            <div className='header-cart'>
                <h1> Giỏ hàng</h1>
                <ProgressBar now={now} className='process'/>
            </div>
            <div className='body-cart'>
                <div className='details-cart'>
                    <table className='table-cart'>
                        <tr>
                            <td id='product'>Sản phẩm</td>
                            <td id='quality'>Số lượng</td>
                            <td id='price'>Tổng</td>
                        </tr>
                        {ListCart.map((item, key) => {
                            var size ="";
                            if(item.size === 0){
                                size = "M"
                            }else if(item.size === 1){
                                size = "L"
                            }else if(item.size === 2){
                                size = "XL"
                            }
                            return (
                                <tr key={key}>
                                    <td id='product key'>
                                        <div className='cart-item'>
                                            <div className='img-item'>
                                                <img src={item.image[0]} alt='img-product' width={75} height={75}></img>
                                            </div>
                                            <div className='details-product'>
                                                <a href='/' alt='href-product'>{item.product_name}</a>
                                                <p>Size: {size}</p>
                                                <p>{Number(item.price).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <Button variant="light" style={{margin:'2px'}} onClick={()=>DecreaseQuantity(key)}>-</Button>
                                        <Button variant='light'>{item.quantity}</Button>
                                        <Button variant="light" style={{margin:'2px'}} onClick={()=>IncreaseQuantity(key)}>+</Button>
                                    </td>
                                    <td id='price' colSpan={2}>{TotalPrice(item.price,item.quantity)}</td>
                                    <td id='delete-cart'>
                                        <Button variant="danger" style={{margin:'2px'}} onClick={()=>DeleteCart(key)}>x</Button>
                                    </td>
                                </tr>
                            );
                        })}
                    </table>
                </div>
                <div className='test-cart'></div>
                <div className='total-cart'>
                    <div className='total-price'>
                        <h2>Tổng</h2>
                        <h2>{Number(TotalCart).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</h2>
                    </div>
                    <p className='total-permission'>Đã bao gồm thuế: <a href='/' alt='chinhsachvanchuyen'>Phí ship</a> sẽ được tính khi thanh toán</p>
                    <Form.Control as="textarea" rows={5} placeholder='Ghi chú'/>
                    <button className="btn-payment" onClick={handleShow}>
                        Thanh Toán
                    </button>
                </div>
            </div>
            <Modal
                centered={true}
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                size="xl"
            >
                <Modal.Header closeButton>
                <Modal.Title>Thanh toán</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='details-cart'>
                        <table className='table-cart'>
                            <tr>
                                <td id='product'>Sản phẩm</td>
                                <td id='quality'>Số lượng</td>
                                <td id='price'>Tổng</td>
                            </tr>
                            {ListCart.map((item, key) => {
                                var size ="";
                                if(item.size === 0){
                                    size = "M"
                                }else if(item.size === 1){
                                    size = "L"
                                }else if(item.size === 2){
                                    size = "XL"
                                }
                                return (
                                    <tr key={key}>
                                        <td id='product key'>
                                            <div className='cart-item'>
                                                <div className='img-item'>
                                                    <img src={item.image[0]} alt='img-product' width={75} height={75}></img>
                                                </div>
                                                <div className='details-product'>
                                                    <a href='/' alt='href-product'>{item.product_name}</a>
                                                    <p>Size: {size}</p>
                                                    <p>{Number(item.price).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td align='center'>
                                            <Button variant='light'>{item.quantity}</Button>
                                        </td>
                                        <td  id='price' colSpan={2}>{TotalPrice(item.price,item.quantity)}</td>
                                    </tr>
                                );
                            })}
                            <tr>
                                <td colSpan={2}>Tổng:</td>
                                <td align='right'>{Number(TotalCart).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</td>
                            </tr>
                        </table>
                    </div>   
                    <div className='shipment-details'>
                        <div className='address'>
                            <h2>Địa chỉ</h2>
                            <table id='user-info'>
                                <tr>
                                    <td>Họ:</td>
                                    <td>
                                        <span>{data.firstname || ''}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Tên:</td>
                                    <td><span>{data.lastname || ''}</span></td>
                                </tr>
                                <tr>
                                    <td>Số điện thoại:</td>
                                    <td><span>{data.phone || ''}</span></td>
                                </tr>
                                <tr>
                                    <td>Địa chỉ</td>
                                    <td> <span>{data.address || ''}</span></td>
                                </tr>
                            </table>
                        </div>
                    </div>        
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Đóng</Button>
                <Button variant="light" onClick={handlePayment}>Đặt hàng</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
      items: state._todoProduct
    };
  };
  
  export default connect(mapStateToProps, {
    IncreaseQuantity,
    DecreaseQuantity,
    DeleteCart
  })(CartPage);