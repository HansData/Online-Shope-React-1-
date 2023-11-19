import { useState } from 'react';
import Navbar from './components/Fragments/Navbar';
import Slider from './components/Fragments/Slider';

function App() {
  return (
    <>
      <div className="bg-slate-400 w-full h-[200vh] min-w-[380px]">
        <Navbar></Navbar>
        <Slider></Slider>
      </div>
    </>
  );
}

export default App;
