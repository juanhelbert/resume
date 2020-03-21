import React from 'react';
import { Header } from './organisms/Header'
import { Content } from './organisms/Content'
import './App.scss';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Content />
    </div>
  );
}

export default App;
