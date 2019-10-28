import React from 'react';
import classNames from 'classnames'
import './index.scss';

function Tab ({ children, name, active, onClick }) {
  const styleNames = classNames('tab', {
    'tab--active': active
  })
  return (
    <div onClick={e => onClick(name)} className={styleNames}>
      {children}
    </div>
  );
}

export default Tab;