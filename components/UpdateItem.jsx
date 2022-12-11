import React from 'react';
import { Button, Form } from 'react-bootstrap';

const UpdateItem = () => {
    return (
        <div>
            <div className='m-5'>
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
        </div>
    );
};

export default UpdateItem;