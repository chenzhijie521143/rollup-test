import React from 'react';
import config from './config.json';
import './index.css';

const App = () => {
  return (
    <div className="title">
      {config.title}
    </div>
  );
}

export default App
