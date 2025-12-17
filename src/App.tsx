import { useState } from 'react';
import './App.css';
import Login02 from './components/login-02';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className='text-red-600'>Hello ShadCN + Block.so</h1>
      <div className='card'>
        <Login02 />
        <button
          onClick={() => setCount((count) => count + 1)}
          className='px-4 py-2 font-bold text-white bg-blue-600 rounded hover:bg-blue-700'>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
