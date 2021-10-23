import React, { useState } from 'react';
import { Courses } from './components/Courses';
import { Header } from './components/Header';
import { Loader } from './components/Loader';

function App() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className='wrapper'>
      <div className='content-wrapper'>
        <Header />
        <div className='container'>
          {isLoading ? <Loader /> : <Courses isLoadingHandler={setIsLoading} />}
        </div>
      </div>
    </div>
  );
}

export default App;
