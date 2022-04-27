import React, { useState } from 'react'

function AddProducts(props) {
    const [productName, setProductName] = useState('');
    const [unitPrice, setUnitPrice] = useState('');
    const [unitsInStock, setUnitsInStock] = useState('');


    const addNewProduct = () => {

        let newProduct = {
            name: productName,
            unitPrice: unitPrice,
            unitsInStock : unitsInStock
        }

        if(unitsInStock>=5){

            props.addNew(newProduct);
        } 
        else{

            alert('Quantity is not enough');
        }

        setProductName('');
        setUnitPrice('');
        setUnitsInStock('');

    }

    return (
        <div>
            <div>
                <label>Name:</label>
                <input type='text' value={productName} onChange={(e) => setProductName(e.target.value)}/>
            </div>

            <div>
                <label>Unit Price:</label>
                <input type='text' value={unitPrice} onChange={(e) => setUnitPrice(e.target.value)}/>
            </div>

            <div>
                <label>Stock:</label>
                <input type='text' value={unitsInStock} onChange={(e) => setUnitsInStock(e.target.value)}/>
            </div>

            <div>
                <button onClick={() => addNewProduct()}>Add</button>
            </div>
        </div>
  )
}

export default AddProducts