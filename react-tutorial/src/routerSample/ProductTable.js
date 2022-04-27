import { Table } from 'antd';
import React, { useEffect, useState } from 'react'

function OrderTable() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://northwind.vercel.app/api/products")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
            })

    }, []);

    let columns = [
        {
            title: 'ID',
            dataIndex: 'id'
        },
        {
            title: 'Customer Id',
            dataIndex: 'supplierId'
        }, {
            title: 'Name',
            dataIndex: 'name'
        },
        {
            title: 'Stock',
            dataIndex: 'unitsInStock'
        }
    ]
    return (
        <div>
            <Table dataSource={products} columns={columns}></Table>
        </div>
    )
}
export default OrderTable