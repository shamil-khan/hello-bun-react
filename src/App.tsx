import { useState } from 'react';
import './App.css';
import Login02 from '@/components/login-02';
import FormLayout01 from '@/components/form-layout-01';
import FormLayout02 from '@/components/form-layout-02';
import FormLayout03 from '@/components/form-layout-03';
import FormLayout04 from '@/components/form-layout-04';
import FormLayout05 from '@/components/form-layout-05';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className='text-red-600'>Hello ShadCN + Block.so</h1>
      <div className='card'>
        <Login02 />
        <FormLayout01 />
        <FormLayout02 />
        <FormLayout03 />
        <FormLayout04 />
        <FormLayout05 />
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
