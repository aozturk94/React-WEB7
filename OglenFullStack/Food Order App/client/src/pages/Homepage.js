import React from 'react'
import Food from '../components/Food'
import foods from '../fooddata'

function Homepage() {
  return (
    <div className=''>
        <div className='row container-fluid'>
            {foods.map((food) =>(
                <div className='col-md-4 mt-5'>
            <Food food={food}/>
            </div>
            ))}
        </div>
    </div>
  )
}

export default Homepage