import React from 'react'

function SuppliersList(props) {

    return (
        <div>
            <table>
                <tr>
                    <td>ID</td>
                    <td>Name</td>
                    <td>Contact</td>
                    <td>Title</td>
                    <td>City</td>
                </tr>
                {
                    props.SuppliersPage.map((item, key) => {

                        return <tr>
                            <td>{item.id}</td>
                            <td>{item.companyName}</td>
                            <td>{item.contactName}</td>
                            <td>{item.contactTitle}</td>
                            <td>{item.address.city}</td>
                        </tr>
                    })
                }
            </table>
        </div>
    )
}

export default SuppliersList