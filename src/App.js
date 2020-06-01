import React, { useMemo } from 'react'; 
import { inject, observer } from 'mobx-react';
import './App.css';

function App({as, bs}) {
  
  const { count : countAs,  add : addAs } = as
  const { count : countBs, add: addBs } = bs

  const totalCount = useMemo(() => {
    return countAs + countBs
  }, [countAs])

  return (
    <div className="App">
      <div>as: {countAs}</div>
      <button onClick={addAs}>add as</button>
      <div>bs: {countBs}</div>
      <button onClick={addBs}>add bs</button>
      <div>all: {totalCount}</div>
    </div>
  );
}

export default inject('as', 'bs')(observer(App));
