import './_Cart.scss'
function Cart({show, onClose}) {
    const modalState = {
        display: show ? 'block' : 'none',
    }
    return ( 
        <div className='cart' style={modalState}>
            <div className='modal-container'>
                <span className='close' onClick={onClose}></span>
            </div>
        </div>    
    );
}
    
export default Cart;
