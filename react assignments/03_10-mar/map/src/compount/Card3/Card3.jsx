import React from 'react'
import "./Card3.css"

function Card3() {
    const products = [
        { id: 1,picture: "https://m.media-amazon.com/images/I/41xAn0iwc6L._SX679_.jpg", name: "Wireless Mouse", price: 25.99, inStock: true },
        {
            id: 2,picture: "https://m.media-amazon.com/images/I/61UOaC2r2-L._SX522_.jpg", name: "Mechanical Keyboard", price: 89.99, inStock: false
        },
        {
            id: 3,picture: "https://m.media-amazon.com/images/I/41VsmkhaaKL._SX300_SY300_QL70_FMwebp_.jpg", name: "Noise-Cancelling Headphones", price: 199.99,
            inStock: true
        }]
    return (
        <div className='products-card'>
            {products.map((element)=>{
                return(
                    <div className="products">
                        <img src={element.picture} alt="img" width={250} height={200} />
                        <h3>{element.name}</h3>
                        <p>Price : {element.price}</p>
                        <p>InStock : {element.inStock}</p>
                        <button>Add to cart</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Card3