import React from 'react'
import { useContext } from 'react'
import CartContext from '../store/cart-context'
import ModalItem from './ModalItem'


const Modal = ({ setAdding, setModal }) => {
  const cartCtx = useContext(CartContext)

  const resetItems = () => {
    cartCtx.removeFromCart();
    setAdding(0);
  }


  return (
    <>
      <div className="overlay"></div>

      <div className='container'>

        <div className='row d-flex justify-content-center'>
          <div className='col-md-6 col-9 popupCont'>
            <div className='popUpBox mt-5'>
              <div className="row d-flex justify-content-between align-items-center">
                {
                  cartCtx.cartItems.map((item, index) => (
                    <ModalItem key={item.id} name={item.name} id={item.id} amount={item.amount} price={item.price} setAdding={setAdding} inc={item.inc} dec={item.dec} />
                  ))
                }
              </div>
              <div className="popUpButtons d-flex justify-content-between">
              <button type="button" className="btn btn-secondary" onClick={() => resetItems()}>Clear All</button>
              <button type='button' className="btn btn-dark" onClick={() => setModal(false)}>X</button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal