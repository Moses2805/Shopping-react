import React from 'react'
import { useContext } from 'react'
import CartContext from '../store/cart-context'

const ModalItem = ({ name, amount, setAdding, inc, dec }) => {

  const cartCtx = useContext(CartContext);

  // const deletingItem = () => {
  //   cartCtx.removeFromCart({id: props.id}
  //     )
  // }




  return (
    <>
      <div className="col-8">
        <h5>{name}</h5>
        <div className="amount">
        <p>{amount}</p>

        </div>

      </div>

      <div className="col-2">
        <p className='changer' onClick={() => { cartCtx.incrementPrice(name); setAdding(c => c + 1) }}>{inc}</p>
      </div>
      <div className="col-2">
        <p className='changer' onClick={() => { cartCtx.decrementPrice(name); setAdding(c => c > 0 ? c - 1 : 0) }}>{dec}</p>
      </div>
      <hr />
    </>
  )
}

export default ModalItem