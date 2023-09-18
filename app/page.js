import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MainContainer from '@/components/MainContainer';

export default function Home() {
  return (
    <main className='main-body'>
      <Header></Header>
      <MainContainer></MainContainer>
      <Footer></Footer>
    </main>
  );
}
