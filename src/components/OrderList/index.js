import React, { useState } from 'react';

function OrderList () {
  // initial
  const [ name, setName ] = useState('')

  const handleInputChange = e => setName(e.target.value)

  return (
    <div>
      <input value={name} onChange={handleInputChange}></input>
    </div>
  );
}

export default OrderList;