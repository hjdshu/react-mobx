
import React, { useMemo } from 'react'; 
import { inject, observer } from 'mobx-react';

function Child({as, bs}) {
  
  const { count : countAs,  add : addAs } = as
  const { count : countBs, add: addBs } = bs

  return (
    <div className="Child">
      <br/>
      <br/>
      this is child
      <div>child as: {countAs}</div>
      <div>child bs: {countBs}</div>
    </div>
  );
}

export default inject('as', 'bs')(observer(Child));
