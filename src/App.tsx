import React from 'react';
import { a } from '@/utils';
import config from './config.json';
import './index.less';

const App = () => {
  const getTitle = () => {
    return config.title
  }
  a()
  console.log(Array.from([]));

  return (
    <div className="title">
      {getTitle()}333
    </div>
  );
}

export default App
