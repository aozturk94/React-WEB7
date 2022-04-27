import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function OrderDetail() {

    let { id } = useParams();

    const [order, setOrder] = useState({});


    useEffect(() => {
        
        fetch("https://northwind.vercel.app/api/orders/" + id)
        .then(res => res.json())
        .then((data) => {
            setOrder(data);
        })
    }, [])

    return (
        <div>
            <h1>Orders Detail</h1>
            <h1>Order ID: {order.id}</h1>
            <h1>Customer ID: {order.customerId}</h1>
            <h1>Order Date: {order.orderDate}</h1>
            <h1>Ship Name: {order.shipName}</h1>

        </div>
    )
}

export default OrderDetail