import type { Metadata } from 'next';
import './globals.css';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({
  children
}: RootLayoutProps) => {
  return (
    <>
      <Navbar/>
      <main className='relative overflow-hidden'>
        {children}
      </main>
      <Footer/>
    </>
  );
}

export default RootLayout;
