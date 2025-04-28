import React from 'react';
import './Cart.css'



function Cart() {
  const users = [
    {
      id: 1, name: "Alice", email: "alice@example.com", image:
        "https://via.placeholder.com/150"
    },
    {
      id: 2, name: "Bob", email: "bob@example.com", image:
        "https://via.placeholder.com/150"
    },
    {
      id: 3, name: "Charlie", email: "charlie@example.com", image:
        "https://via.placeholder.com/150"
    }
  ];


  {
    var card = users.map((element) => {
      return (
        <div className='cart'>
          <img src={element.image} alt="" width={100} height={100} />
          <h1>{element.name}</h1>
          <p>{element.email} </p>
        </div>
      )
    })
  }

  return (
    <div id='cart-container'>{card}</div>
  )
}

export default Cart;