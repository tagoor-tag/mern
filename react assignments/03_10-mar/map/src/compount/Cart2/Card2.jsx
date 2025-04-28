import React from 'react'
import "./Card2.css"

function Card2() {
    const cars = [
        { id: 1, make: "Toyota", model: "Corolla", year: 2020 },
        { id: 2, make: "Honda", model: "Civic", year: 2019 },
        { id: 3, make: "Ford", model: "Mustang", year: 2021 }
    ];

    return (
        <div className='secondCardContainer'>
            {cars.map((element)=>{
                return(
                    <div className="card2">
                        <h1>{element.make} </h1>
                        <p>Model : {element.model}</p>
                        <p>Year : {element.year}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Card2