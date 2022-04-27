import React from 'react'

function Contact(props) {
  return (
    <div>
        <center>
            <h1>User Name: {props.username}</h1>
            <h1>Name: {props.name}</h1>
            <h1>Surname: {props.surname}</h1>
            <img src={props.img}/>
        </center>
    </div>
  )
}

export default Contact