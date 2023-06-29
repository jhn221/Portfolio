import React, { useRef } from 'react';
import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import Main from './Main';
import Sayo from './page/Sayo/Sayo';
import Movie from './page/movie/Movie';
import Clone from './page/clone/Clone';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Flutter from './page/flutter/flutter';

function App() {
  const contactRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const onContactClick = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      {/* <BrowserRouter basename={process.env.PUBLIC_URL}></BrowserRouter> */}
      <header className="App-header">
        {['/'].includes(location.pathname) && <Header/>}
          <Routes>
            <Route path='/' element={<Main ref={contactRef}/>}/>
            <Route path='/sayo' element={<Sayo/>}/>
            <Route path='/movie' element={<Movie/>}/>
            <Route path='/clone' element={<Clone/>}/>
            <Route path='/flutter' element={<Flutter/>}/>
          </Routes>
      </header>
      <Footer/>
    </div>
  );
}

export default App;
