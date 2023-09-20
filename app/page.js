import Footer from '@/components/Footer';
import Header from '@/components/Header';
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
