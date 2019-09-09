import React from 'react';
import style from './style.module.css';
import Router from '../../core/Router';

const App = () => {
  return (
    <div className={style.app}>
      <Router />
    </div>
  );
}

export default App;

