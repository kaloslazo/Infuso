import { BrowserRouter } from 'react-router-dom';
import { Router } from '@/router';
import { SidebarComponent } from '@/components/';

export const App = () => {
  return (
    <BrowserRouter>
      <main className='flex flex-row w-full h-full min-h-screen gap-4 mx-auto min-w-screen bg-ctp-base text-ctp-text'>
        <SidebarComponent />
        <Router />
      </main>
    </BrowserRouter>
  );
};