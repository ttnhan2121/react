import './_Cart.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
function Cart({show, onClose}) {
    const modalState = {
        visibility: show ? 'visible' : 'hidden',
    }
    const handleModalClick = (event) => {
        if (event.target.classList.contains('cart') && !event.target.closest('.modal-container')) {
          onClose();
        }
      };
    return ( 
        <div className='cart' style={modalState} onClick={handleModalClick}>
            <div className='modal-container' >
                <div className='modal-close' onClick={onClose}><FontAwesomeIcon icon={faXmark} style={{color: "#0f5bff", textAlign: 'left'}} /></div>
                <div className='body'>
                    <svg width="50" height="50" viewBox="0 0 24 24" fill="#none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M14.1213 11.2332H16.8891C17.3088 11.2332 17.6386 10.8863 17.6386 10.4679C17.6386 10.0392 17.3088 9.70248 16.8891 9.70248H14.1213C13.7016 9.70248 13.3719 10.0392 13.3719 10.4679C13.3719 10.8863 13.7016 11.2332 14.1213 11.2332ZM20.1766 5.92762C20.7861 5.92762 21.1858 6.14192 21.5855 6.61136C21.9852 7.08079 22.0551 7.75433 21.9652 8.36561L21.0159 15.0602C20.8361 16.347 19.7569 17.2951 18.4879 17.2951H7.58639C6.25742 17.2951 5.15828 16.2552 5.04837 14.9081L4.12908 3.78353L2.62026 3.51819C2.22057 3.44676 1.94079 3.04876 2.01073 2.64056C2.08068 2.22317 2.47038 1.94661 2.88006 2.00886L5.2632 2.37522C5.60293 2.43747 5.85274 2.7222 5.88272 3.06917L6.07257 5.35511C6.10254 5.68269 6.36234 5.92762 6.68209 5.92762H20.1766ZM7.42631 18.908C6.58697 18.908 5.9075 19.6019 5.9075 20.4592C5.9075 21.3062 6.58697 22.0001 7.42631 22.0001C8.25567 22.0001 8.93514 21.3062 8.93514 20.4592C8.93514 19.6019 8.25567 18.908 7.42631 18.908ZM18.6676 18.908C17.8282 18.908 17.1487 19.6019 17.1487 20.4592C17.1487 21.3062 17.8282 22.0001 18.6676 22.0001C19.4969 22.0001 20.1764 21.3062 20.1764 20.4592C20.1764 19.6019 19.4969 18.908 18.6676 18.908Z" fill="#0F5BFF"/>
                    </svg>
                </div>
                <h5 className='text-cart'>Giỏ hàng đang trống</h5>
                <Link class="btn btn-primary" to={'/'} role="button" onClick={onClose}>Tiếp tục mua hàng</Link>
            </div>
        </div>    
    );
}
    
export default Cart;
