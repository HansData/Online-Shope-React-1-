import { useState } from 'react';
import Navbar from './components/Fragments/Navbar';

function App() {
  return (
    <>
      <div className="bg-slate-400 w-full h-[200vh] min-w-[380px]">
        <Navbar></Navbar>
      </div>
    </>
  );
}

export default App;
