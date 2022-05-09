import React, { useState } from 'react';
import { Button, Modal} from "react-bootstrap";
function Food({ food }) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [varient, setVarient] = useState("small");
    const [quantity, setQuantity] = useState(1);
    return (
        <>
            <div>
                <div className='' onClick={handleShow}>
                    <h1>{food.name}</h1>
                    <img src={food.img} className="img-fluid"></img>
                </div>
            </div>
            <div className='row container mx-1'>
                <div className='col-8'>
                    <p>Özellik</p>
                    <select className='form-select' value={varient} onChange={(e) => setVarient(e.target.value)}>
                        {food.varient.map((varient) => (
                            <option value={varient}>
                                {varient}
                            </option>
                        ))}

                    </select>
                </div>

                <div className='col-4'>
                    <p>Miktar</p>
                    <select className='form-select' value={quantity} onChange={(e) => setQuantity(e.target.value)}>
                        {[...Array(10).keys()].map((x, i) =>
                        (
                            <option value={i + 1}>
                                {i + 1}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="flex-container row ms-auto mt-3">
                <div className='col-md-6'>
                    <h1>Tutar: {food.prices[0][varient] * quantity}</h1>
                </div>
                <div className='col-md-6'>
                    <button className='btn btn-primary'>Sepete Ekle</button>
                </div>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{food.name}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <img src={food.img} className="img-fluid"></img>
                    <Modal.Title>Kategory: {food.category}</Modal.Title>
                    <p>{food.desc}</p>
                </Modal.Body>

                <Modal.Footer>
                            <button className='btn btn-danger' onClick={handleClose}>
                                Kapat
                            </button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Food