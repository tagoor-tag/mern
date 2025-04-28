import React from 'react'
import "./Table.css"

function Table() {
    const products = [
        { id: 1, name: "Laptop", price: 999, quantity: 5 },
        { id: 2, name: "Phone", price: 699, quantity: 10 },
        { id: 3, name: "Tablet", price: 499, quantity: 8 }
    ];

    {
        var tableElemnt = products.map((element) => {
            return (
                <tr>
                    <td>{element.id} </td>
                    <td>{element.name} </td>
                    <td>{element.price} </td>
                    <td>{element.quantity} </td>
                </tr>

            )
        })
    }

    return(
        <div id='table-Compound'>
            <table border={1}>{tableElemnt} </table>
        </div>
    )
}

export default Table