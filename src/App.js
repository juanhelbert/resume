import React from 'react';
import { Header } from './organisms/Header/Header'
import { Content } from './organisms/Content/Content'
import { Footer } from './organisms/Footer/Footer'
import './App.scss';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
