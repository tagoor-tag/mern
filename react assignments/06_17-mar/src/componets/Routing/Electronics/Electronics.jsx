import axios from 'axios';
import React, { useState } from 'react'


function Electronics() {
  let [products, setproducts] = useState([]);

  const getData = () => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      console.log(res.data)
      setproducts(res.data)
    }).catch((error) => {
      console.log(error)
    })
  }


  return (
    <div className='productsSection'>
      <section className='detailsBgSection'>
        <section className='detailsSection'>
          <h1>{ }</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam incidunt distinctio alias id voluptas delectus eius doloremque nihil omnis, laboriosam rem laborum tempora nostrum totam nam enim accusantium nesciunt. Saepe quos doloremque fugiat modi vel quia excepturi? Eaque similique, soluta fuga perspiciatis quas officia consequatur id ipsum a nisi eveniet sunt dolorum esse animi sequi praesentium culpa voluptate. Non, ipsam?</p>
        </section>
      </section>

      <section className='btn'>
        <button onClick={ getData}>get data</button>
      </section>

      <section className='productContainer'>
        {products.filter((product) => { return product.category == "electronics" }).map((product, index) => {
          return (<div className='card' key={index}>
            <img src={product.image} alt="" width={230} height={230} />
            <h3>{product.title}</h3>
            <p>$ {product.price}</p>
            <button>Product details</button>
            <button>Add to cart</button>
          </div>)
        })

        }
      </section>
    </div>
  )
}

export default Electronics