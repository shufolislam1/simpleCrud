import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ShowData = ({ product }) => {
    const handleDelete = id => {
        console.log('something');
        useEffect(() => {
            fetch(`http://localhost:5000/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => console.log(data))
        }, [])
    }
    return (
        <div>
            <div className='mx-5'>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>operation 1</th>
                            <th>operation 2</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{product?.name}</td>
                            <td>{product?.price}</td>
                            <td>{product?.quantity}</td>
                            <td>
                                <Link to={`/updateItem/${product._id}`}>
                                    <Button size='sm' variant="info">Update Item</Button>
                                </Link>
                            </td>
                            <td>
                                <Link>
                                    <Button onClick={() => handleDelete(product?._id)} size='sm' variant="info">Delete Item</Button>
                                </Link>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default ShowData;