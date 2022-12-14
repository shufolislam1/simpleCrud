import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const UpdateItem = () => {
    const {id} = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/updateItem/${id}`)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])
    return (
        <div>
            <div className='m-5'>
                <div className='py-3 '>
                    <Link to={'/'}>
                        <Button variant="info">Go Back</Button>
                    </Link>
                </div>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Update Product Name</Form.Label>
                        <Form.Control type="text" value={product.name} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Update Product Price</Form.Label>
                        <Form.Control type="text" value={product.price} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Update Product Quantity</Form.Label>
                        <Form.Control type="text" value={product.quantity} />
                    </Form.Group>

                    <Button variant="info" type="submit">
                        Update Item
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default UpdateItem;