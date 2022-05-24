import React from 'react';
import config from './config.json';
import './index.less';

const App = () => {
  const getTitle =()=>{
    return config.title
  }
  console.log(Array.from([]));
  
  return (
    <div className="title">
      {getTitle()}
    </div>
  );
}

export default App
