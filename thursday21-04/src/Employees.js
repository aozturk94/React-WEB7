import React from 'react'

function Employees() {
    const employees = [
    {
        name:"Gülşah",
        id:"01"
    },    
    {
        name:"Oğuzhan",
        id:"02"
    },
    {
        name:"Metehan",
        id:"03"
    },
    {
        name:"Abdullah",
        id:"04"
    },
    {
        name:"Ahmet",
        id:"05"
    },
    {
        name:"Arda",
        id:"06"
    }
]
  return (
    <div>{employees.map((employee) =>(
        <div>
            <h1>{employee.id}</h1>
            <h1>{employee.name}</h1>
        </div>
    ))}</div>
  )
}

export default Employees