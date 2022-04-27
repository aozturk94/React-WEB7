import React, { useEffect, useState } from 'react'

function EffectSample() {

    const [suppliers, setSuppliers] = useState([]);
    const [sayac, setSayac] = useState(0);

    useEffect(() => {
        getSuppliers();
    }, []);

    const getSuppliers = () => {
        fetch("https://northwind.vercel.app/api/suppliers")
            .then(res => res.json())
            .then((data) => {

                setSuppliers(data);
            });

    }

    return (
        <div>
            <h1>{sayac}</h1>
            <button onClick={() => setSayac(sayac + 1)}>Arttır</button>
            <table>
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Contact</td>
                    <td>Title</td>
                    
                </tr>
                {
                    suppliers && suppliers.map((item, key) => {
                        return <tr>
                            <td>{item.id}</td>
                            <td>{item.companyName}</td>
                            <td>{item.contactName}</td>
                            <td>{item.contactTitle}</td>
                        </tr>
                    })
                }
            </table>
        </div>
    )
}

export default EffectSample