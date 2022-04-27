import React, { useState, useEffect } from 'react'
import AddProducts from './AddProducts';
import ProductsList from './ProductsList';

function ProductsPage() {


    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://northwind.vercel.app/api/products")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setLoading(false);
            })
    }, []);

    const addNew = (item) => {

        let requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        }

        fetch("https://northwind.vercel.app/api/products", requestOptions)
            .then((res) => res.json())
            .then((data) => {
            setProducts([...products, data]);
            })
    }

    const deletePro = (id) => {

        let newProducts = products.filter(q => q.id != id);
        setProducts(newProducts);

    }

  return (
    <div>
        <AddProducts addNew={addNew}></AddProducts>
        <ProductsList loading={loading} products={products} deletePro={deletePro}></ProductsList>
        </div>
    )
}

export default ProductsPage