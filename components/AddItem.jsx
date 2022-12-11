import React from 'react';
import { Button, Form } from 'react-bootstrap';

const AddItem = () => {
    return (
        <div className='m-5'>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Product Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Product Price</Form.Label>
                    <Form.Control type="text" placeholder="Enter Product Price" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Product Quantity</Form.Label>
                    <Form.Control type="text" placeholder="Enter Product Quantity" />
                </Form.Group>
                
                <Button variant="info" type="submit">
                    Add Item
                </Button>
            </Form>
        </div>
    );
};

export default AddItem;