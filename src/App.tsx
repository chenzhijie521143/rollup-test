import React from 'react';
import { a } from '@/utils';
import config from './config.json';
import './index.less';

interface IProps {
  title: string;
}
function App({ title }: IProps) {
  const getTitle = () => {
    return config.title;
  };
  a();
  // console.log(Array.from([]));

  return (
    <div className="title">
      {getTitle()}
      {title}
    </div>
  );
}

export default App;
