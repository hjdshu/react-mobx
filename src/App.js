import React, { useMemo } from 'react'; 
import { inject, observer } from 'mobx-react';
import './App.css';
import Child from './components/Child.js'

function App({as, bs}) {
  
  const { count : countAs,  add : addAs } = as
  const { count : countBs, add: addBs } = bs

  const totalCount = useMemo(() => {
    return countAs + countBs
  }, [countAs, countBs])

  return (
    <div className="App">
      <div>as: {countAs}</div>
      <button onClick={addAs}>add as</button>
      <div>bs: {countBs}</div>
      <button onClick={addBs}>add bs</button>
      <div>all: {totalCount}</div>

      <Child></Child>
    </div>
  );
}

export default inject('as', 'bs')(observer(App));
