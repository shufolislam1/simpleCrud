import React from 'react';
import { Table } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ShowData = ({ product }) => {
    return (
        <div>
            <div className='mx-5'>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>sl. no</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>operation 1</th>
                            <th>operation 2</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>{product?.name}</td>
                            <td>{product?.price}</td>
                            <td>{product?.quantity}</td>
                            <Link to={"/updateItem"}>
                                <td><Button size='sm' variant="info">Update Item</Button></td>
                            </Link>
                            <td><Button size='sm' variant="info">Delete Item</Button></td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default ShowData;