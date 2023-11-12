import './_CartPage.scss'
import ProgressBar from 'react-bootstrap/ProgressBar';
import { useState,useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import imgtest from '../../../../assets/img/515Kem-B.jpg'
import { connect } from "react-redux";
import { IncreaseQuantity, DecreaseQuantity, DeleteCart } from "../../../../action/action";

const price = 299000;
function CartPage({ items, IncreaseQuantity, DecreaseQuantity, DeleteCart }) {
    let ListCart = [];
    let TotalCart = 0;
    Object.keys(items.Carts).forEach(function (item) {
        TotalCart += items.Carts[item].quantity * items.Carts[item].price;
        ListCart.push(items.Carts[item]);
    });
    function TotalPrice(price, tonggia) {
        return Number(price * tonggia).toLocaleString("en-US");
    }
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
        <div className='cartpage'>
            <div className='header-cart'>
                <h1> Giỏ hàng</h1>
                <ProgressBar now={now} className='process'/>
            </div>
            <div className='body-cart'>
                <div className='details-cart'>
                    <table className='table-cart'>
                        <thread>
                            <tr>
                                <th id='product'>Sản phẩm</th>
                                <th id='quality'>Số lượng</th>
                                <th id='price'>Tổng</th>
                            </tr>
                        </thread>
                        <tbody>
                            {ListCart.map((item, key) => {
                                return (
                                    <tr>
                                        <td id='product key'>
                                            <div className='cart-item'>
                                                <div className='img-item'>
                                                    <img src={item.image} alt='img-product' width={75} height={75}></img>
                                                </div>
                                                <div className='details-product'>
                                                    <a href='/' alt='href-product'>{item.product}</a>
                                                    <p>item.price</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td id='quality'>
                                            <Form.Control type="number" defaultValue={item.quantity} min={0}/>
                                        </td>
                                        <td id='price'>{item.price.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</td>
                                    </tr>
                                );
                            })}
                       </tbody>
                    </table>
                </div>
                <div className='test-cart'></div>
                <div className='total-cart'>
                    <div className='total-price'>
                        <h2>Tổng</h2>
                        <h2>{price.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</h2>
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