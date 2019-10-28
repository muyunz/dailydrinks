import React from 'react';

import './index.scss';

function Card ({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

export default Card;