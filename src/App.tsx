import React from 'react';
import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import Main from './Main';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Header/>
        <Main/>
      </header>
      <Footer/>
    </div>
  );
}

export default App;
