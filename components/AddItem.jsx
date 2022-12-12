import React from 'react';
import { Button, Form } from 'react-bootstrap';


const AddItem = () => {
    const handleAddItem = event => {
        event.preventDefault();
        const name = event.target.formBasicName.value;
        const price = event.target.formBasicPrice.value;
        const quantity = event.target.formBasicQuantity.value;
        const info = {name,price,quantity}
        // console.log(info);
        fetch('http://localhost:5000/addItem',{
            method:'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(info)
        })
        .then((res) => res.json())
        .then(data => {
            console.log('success:', data);
        })
        .catch(error => {
            console.log('Error:', error);
        })
    }
        
    return (
        <div className='m-5'>
            <Form onSubmit={handleAddItem}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Product Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPrice">
                    <Form.Label>Product Price</Form.Label>
                    <Form.Control type="text" placeholder="Enter Product Price" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicQuantity">
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