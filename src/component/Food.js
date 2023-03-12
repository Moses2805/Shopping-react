import React, { useContext, useState } from 'react'
import CartContext from '../store/cart-context'


const Food = (props) => {
    const cartCtx = useContext(CartContext)
    const fillModal=(amount) => {
        cartCtx.addItemToCart({
            id: props.id,
            name: props.name,
            price: props.price,
            changingPrice: props.price,
            description: props.description,
            amount: +amount,
            inc: "+",
            dec: "-"
        })
    }

    const [value, setValue] = useState(1)     
    const handleSubmit = (e) => {
        e.preventDefault();
        fillModal(value)
    }  


    return (
        
        <div className='row d-flex justify-content-center'>

            <div className='col-9'>

                <div className='addingArea d-flex justify-content-between align-items-center'>
                    <div className='infoProducts pt-3'>
                        <h5>{props.name}</h5>
                        <p>{props.description}</p>
                        <p>{props.price}</p>
                    </div>

                    <div className='amountArea'>
                        <form className='d-flex flex-column justify-content-center align-items-center' onSubmit={handleSubmit}>
                            <label>Amount:</label>
                            <input type="number" value={value} onChange={(e) => setValue(e.target.value)}/>
                            <button type="submit" className="btn btn-primary mt-2" onClick={() => value > 0 ? props.increment(value) : alert("Please, add positive value")}>Add</button>
                        </form>

                        {/* {console.log(value)} */}

                    </div>


                </div>
                <hr />

            </div>
        </div>

    )
}

export default Food