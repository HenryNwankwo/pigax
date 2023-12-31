import { ToastContainer } from 'react-toastify';
import { PigaxProvider } from './PigaxContext';
import './globals.css';
import { Inter } from 'next/font/google';
import 'react-toastify/dist/ReactToastify.css';
import SessionProvider from './SessionProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Pigax',
  description: 'Image gallery',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <PigaxProvider>
        <body className={inter.className}>
          <SessionProvider>{children}</SessionProvider>
          <ToastContainer />
        </body>
      </PigaxProvider>
    </html>
  );
}
