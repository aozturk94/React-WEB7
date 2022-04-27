import React, { useState } from 'react'

function StateSample3() {
    const [name, setName] = useState('');
    const [names, setNames] = useState([]);

    const addName = () => {

        if(name!=''){
            setNames([...names, name]);
            setName('');
        }

    }

    const removeName = (index) =>{

        // let newNames = names.filter(q => q != item);
        // setNames([...newNames]);

        names.splice(index, 1)
        setNames([...names]);
    }

    return (
        <div>
            <div>

                <label>Name: </label>
                <input type='text' value={name} onChange={(e) => setName(e.target.value)}></input>
                <button onClick={() => addName()}>Add</button>
            </div>
            <ul>
                {
                    names && names.map((item,index) => {
                        return <>
                        <li key={index}>{item}</li><button onClick={() => removeName(index)}>Delete</button>
                        </>
                    })
                }
            </ul>
        </div>
    )
}

export default StateSample3