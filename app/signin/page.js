import Footer from '@/components/Footer';
import LoginForm from '@/components/LoginForm';
import SigninHeader from '@/components/SigninHeader';

export default function Home() {
  return (
    <main className='main-body'>
      <SigninHeader></SigninHeader>
      <section className='flex justify-center items-center h-[520px] w-screen max-w-full'>
        <LoginForm></LoginForm>
      </section>

      <Footer></Footer>
    </main>
  );
}
