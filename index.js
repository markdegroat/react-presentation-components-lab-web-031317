import React from 'react';
import ReactDOM from 'react-dom';

import DumbComponent from './components/DumbComponent';
import DumberComponent from './components/DumberComponent';

function newAlert(){
  console.log("heyu")
}

ReactDOM.render(
  <div>
    <DumbComponent />
    <DumberComponent handleClick={newAlert} />
  </div>,
  document.getElementById('main')
);

require('./test/index-test.js'); // leave this in!
