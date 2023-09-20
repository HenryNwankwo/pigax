import { ToastContainer } from 'react-toastify';
import { PigaxProvider } from './PigaxContext';
import './globals.css';
import { Inter } from 'next/font/google';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <PigaxProvider>
        <body className={inter.className}>
          {children}
          <ToastContainer newestOnTop={true} />
        </body>
      </PigaxProvider>
    </html>
  );
}
