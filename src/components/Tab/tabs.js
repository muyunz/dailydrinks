import React, { useState } from 'react';

import './index.scss';

function Tabs ({ children, onChange }) {
  // states
  const [active, setActive] = useState(null)

  // events
  const onTabClick = tab => {
    setActive(tab)
    onChange(tab)
  }

  if(!active && children.length) {
    setActive(children[0].props.name)
  }

  const tabs = children.map((child, childIndex) => React.cloneElement(child, { key: childIndex, active: child.props.name === active, onClick: onTabClick }))

  return (
    <div className="tabs">
      {tabs}
    </div>
  );
}

export default Tabs;