import React, { useState } from 'react'

function About() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <div className="card container" style={{ width: "18rem" }}>
                <div className="card-body">
                    <h5 className="card-title">React Deneme</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Sayı</h6>
                    <p className="card-text">
                        {count}
                    </p>
                    <a href="#" className="card-link" onClick={() => setCount(count + 1)}>
                        Increment
                    </a>
                    <a href="#" className="card-link" onClick={() => setCount(count - 1)}>
                        Decrement
                    </a>
                </div>
            </div>
        </div>
    )
}

export default About