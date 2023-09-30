import './_Cart.scss'
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
            <div className='modal-container'>

                {/* <div className='close' onClick={onClose}>close</div> */}
            </div>
        </div>    
    );
}
    
export default Cart;
