import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const Apps = React.lazy(()=> import ('./App'))


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense fallback={<span className='flex justify-center items-center w-[100%] h-[100vh]' ><span className='border border-y-sky-900 p-20 rounded-full animate-spin '><div className='w-[60px] h-[60px] rounded-full opacity-40 bg-teal-400 animate-ping'></div></span></span>}>
    <Apps />
    </Suspense>
  </React.StrictMode>
);
