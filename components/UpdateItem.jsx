import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const UpdateItem = () => {
    const {id} = useParams();
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
                        <Form.Control type="text" placeholder="Enter updated Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Update Product Price</Form.Label>
                        <Form.Control type="text" placeholder="Enter updated Price" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Update Product Quantity</Form.Label>
                        <Form.Control type="text" placeholder="Enter updated Quantity" />
                    </Form.Group>

                    <Button variant="info" type="submit">
                        Update Item
                    </Button>
                </Form>
            </div>
            <h2>updating user: {id}</h2>
        </div>
    );
};

export default UpdateItem;