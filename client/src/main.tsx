import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { App } from '@/App';
import '@/styles/tailwind.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <App />
    </Suspense>
  </React.StrictMode>,
);