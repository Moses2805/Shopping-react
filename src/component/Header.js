import React from 'react'
import { HiShoppingCart } from "react-icons/hi"


const Header = ({adding, modal, setModal, updateModal}) => {
    return (
        <div>
            <header>
                <div className='container'>
                    <div className='row d-flex justify-content-between align-items-center'>
                        <div className='col-md-3 col-5 mt-4'>
                            <div className='name'>
                                <h3>React Meals</h3>
                            </div>
                        </div>

                        <div className='col-xl-2 col-lg-3 col-6 mt-4'>
                            <div className="addingAmount d-flex justify-content-evenly align-items-center" onClick={() => updateModal()}>
                                <HiShoppingCart className='shop-icon' />
                                <span>Your Card</span>
                                <div className='addingCount'>
                                    <span>{adding}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </header>
        </div>
    )
}

export default Header
