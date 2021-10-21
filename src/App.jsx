import React from 'react';
import { Courses } from './components/Courses';
import { Header } from './components/Header';

function App() {
  return (
    <div className='wrapper'>
      <div className='content-wrapper'>
        <Header />
        <div className='container'>
          <Courses />
        </div>
      </div>
    </div>
  );
}

export default App;
