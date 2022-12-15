import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

const ShowData = ({ product }) => {
    // useEffect(() => {
    //     fetch(`http://localhost:5000/${id}`, {
    //         method: 'DELETE'
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             swal("Good job!", "Product Successfully added!", "success");
    //         })
    // }, [])
    const handleDelete = id => {
        axios.delete(`http://localhost:5000/${id}`)
            .then(function (response) {
                // handle success
                swal("Good job!", "Product Successfully added!", "success");
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error.response.data);
            })
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
                                <Button onClick={() => handleDelete(product?._id)} size='sm' variant="info">Delete Item</Button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default ShowData;