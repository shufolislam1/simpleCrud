import React, { useEffect, useState } from 'react';

const DeleteItem = () => {
    const [dItem, setDitem] = useState();
    useEffect(() => {
        fetch(`simplecrudser.up.railway.app/${id}`)
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