import React from 'react'

function ProductsList(props) {

const deleteProducts = (id) => {
    props.deletePro(id)
}
  return (
    <div>
        {
            props.loading == true ? (<h1>loading...</h1>) : <table>
            <tr>
                <td>Name</td>
                <td>Unit Price</td>
                <td>Stock</td>
                <td>Delete</td>
            </tr>
            {
                props.products && props.products.map((item, index) => {
                    return <tr key={index}>
                        <td>{item.name}</td>
                        <td>₺{item.unitPrice}</td>
                        <td>{item.unitsInStock} adet</td>
                        <td><button onClick={() => deleteProducts(item.id)}>Delete</button></td>
                    </tr>
                })
            }
        </table>


        }
    </div>
  )
}

export default ProductsList