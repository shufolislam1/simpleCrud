import React, { useEffect, useState } from 'react';

const DeleteItem = () => {
    const [dItem, setDitem] = useState();
    useEffect(() => {
        fetch(`http://localhost:5000/${id}`)
        .then(res => res.json())
        .then(data => setDitem(data))
    },[])
    console.log(dItem);
    return (
        <div>
            <p>delete something</p>
        </div>
    );
};

export default DeleteItem;