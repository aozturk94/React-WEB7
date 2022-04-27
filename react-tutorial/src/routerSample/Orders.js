import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Orders() {

    const [orders, setOrders] = useState([]);


    useEffect(() => {

        fetch("https://northwind.vercel.app/api/orders")
            .then((res) => res.json())
            .then((data) => {
                setOrders(data);
            })

    }, [])


    return (
        <div>
            <h1>Orders Page</h1>
            {
                orders && orders.map((item, key) => {
                    return <li>
                        <Link to={"/Orders/" + item.id}> {item.shipName}</Link>
                    </li>
                })
            }
        </div>
    )
}

export default Orders