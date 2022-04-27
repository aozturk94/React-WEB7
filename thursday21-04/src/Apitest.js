import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Apitest() {
    const [users, setUsers] = useState([])
    const [singleUser, setSingleUser] = useState([])

    useEffect(function () {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => setUsers(response.data))
            .catch((error) => console.log(error))
    }, [])

    const onchangeHandler = (e) =>
    {
        axios.get('https://jsonplaceholder.typicode.com/users/' + e.target.value)
        .then((response) => setSingleUser(response.data)).
        catch((error) => console.log(error));
    }

    return (
        <div className=''>
            <center>
                <select className='form-select w-25' onChange={onchangeHandler}>
                    <option value="0">Select a User</option>
                    {users.map((user) => (
                        <option value={user.id} key={user.id}>
                            {user.name}
                        </option>
                    ))}
                </select>
            </center>
            <br/>
            <hr/>
            <table className='table table-dark'>
                <thead>
                    <tr>
                        <td>#</td>
                        <td>Name</td>
                        <td>Mail</td>
                    </tr>
                </thead>
                <tbody>
                        <tr>
                            <td>{singleUser.id}</td>
                            <td>{singleUser.name}</td>
                            <td>{singleUser.email}</td>
                        </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Apitest