import React from 'react';
import config from './config.json';
import './index.less';

const App = () => {
  return (
    <div className="title">
      {config.title}
    </div>
  );
}

export default App
