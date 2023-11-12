import './_CartPage.scss'
import ProgressBar from 'react-bootstrap/ProgressBar';
import { useState,useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { connect } from "react-redux";
import { IncreaseQuantity, DecreaseQuantity, DeleteCart } from "../../../../action/action";

function CartPage({ items, IncreaseQuantity, DecreaseQuantity, DeleteCart }) {
    let ListCart = [];
    let TotalCart = 0;
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
                                size = "S"
                            }else if(item.size === 1){
                                size = "M"
                            }else if(item.size === 2){
                                size = "L"
                            }else{
                                size = "XL"
                            }
                            return (
                                <tr>
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
                                    <td id='price'>{TotalPrice(item.price,item.quantity)}</td>
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
                    <button className="btn-payment">
                        Thanh Toán
                    </button>
                </div>
            </div>
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