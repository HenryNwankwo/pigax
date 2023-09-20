'use client';
import { SessionProvider as Provider } from 'next-auth/react';

export default function App({ children }) {
  return <Provider>{children}</Provider>;
}
