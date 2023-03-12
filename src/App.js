import React, { useContext } from 'react';
import './App.css';
import { useState } from 'react';
import Food from "./component/Food"
import Modal from './component/Modal';
import CartContext from './store/cart-context';
import Header from './component/Header';
import Advertisement from './component/Advertisement';

function App() {
  const [adding, setAdding] = useState(0)
  const [modal, setModal] = useState(false)
  const cartCtx = useContext(CartContext);

  const increment = (value) => {
    if(value > 0) {
      setAdding(c => c + parseInt(value))

    }
  }

  const updateModal = () => {
    if(cartCtx.cartItems.length > 0) {
      setModal(!modal)
    } else{
      alert(`"Your Card" is empty`)
    }
  }
  const [products, setProducts] = useState([
    {
      id: 0,
      name: "Sushi",
      description: "Finest fish and veggies",
      price: "$22.99"
    },

    {
      id: 1,
      name: "Schnitzel",
      description: "A german specialty!",
      price: "$16.50"
    },

    {
      id: 2,
      name: "Barbecue Burger",
      description: "American, raw, meaty",
      price: "$12.99"
    },

    {
      id: 3,
      name: "Green Bowl",
      description: "Healty and green",
      price: "$18.99"
    }
  ])

  return (
    <div className="App">

      <Header adding={adding} modal={modal} setModal={setModal} updateModal={updateModal}/>

      {
        modal &&    (   
          <Modal setAdding={setAdding} adding={adding} modal={modal} setModal={setModal}/>
        )
      }

      <main>

        <Advertisement />
        <div className='container mt-4'>
          {
            products.map((p, index) => (
              <Food id={p.id} key={p.id} name={p.name} description={p.description} price={p.price} increment={increment} />
            ))
          }
        </div>
      </main>

    </div>

  );
}

export default App;
