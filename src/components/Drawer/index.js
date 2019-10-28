import React from 'react';
import classNames from 'classnames';

import './index.scss';

function Drawer ({ children, open, onClick }) {
  const styleNames = classNames('drawer', {
    [`drawer--open`]: open
  })

  return (
    <div className={styleNames} onClick={onClick}>
      <div className="drawer-content">
        {children}
      </div>
    </div>
  );
}

export default Drawer;