import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ShowData from './ShowData';

const home = () => {
    const [info, setInfo] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/')
            .then(res => res.json())
            .then(data => setInfo(data))
    }, [])
    return (
        <div>
            <div className='p-3 m-5'>
                <Link to={'/addItem'}>
                    <Button variant="info">ADD ITEM</Button>
                </Link>
            </div>
            {
                info.map(product => <ShowData key={product._id} product={product}></ShowData>)
            }
        </div>
    );
};

export default home;