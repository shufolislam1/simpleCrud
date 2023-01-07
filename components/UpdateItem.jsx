import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import swal from 'sweetalert';

const UpdateItem = () => {
    const {id} = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        fetch(`simplecrudser.up.railway.app/updateItem/${id}`)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])

    const handleUpdate = (event, id) => {
        event.preventDefault();
        const name = event?.target?.name?.value;
        const price = event?.target?.price?.value;
        const quantity = event?.target?.quantity?.value;
        const infos = { name, price, quantity }
        fetch(`simplecrudser.up.railway.app/updateItem/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(infos)
        })
            .then((res) => res.json())
            .then(data => {
                swal("Good job!", "Product Successfully Updated!", "success");
                navigate('/');
            })
            .catch(error => {
                console.log('Error:', error);
            })
    }
    return (
        <div>
            <div className='m-5'>
                <div className='py-3 '>
                    <Link to={'/'}>
                        <Button variant="info">Go Back</Button>
                    </Link>
                </div>
                <Form onClick={handleUpdate}>
                    <Form.Group className="mb-3" name="name">
                        <Form.Label>Update Product Name</Form.Label>
                        <Form.Control type="text" value={product.name} />
                    </Form.Group>
                    <Form.Group className="mb-3"price="price">
                        <Form.Label>Update Product Price</Form.Label>
                        <Form.Control type="text" value={product.price} />
                    </Form.Group>
                    <Form.Group className="mb-3" quantity="quantity">
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