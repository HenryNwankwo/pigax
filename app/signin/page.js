import Footer from '@/components/Footer';
import LoginForm from '@/components/LoginForm';
import SigninHeader from '@/components/SigninHeader';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '../api/auth/[...nextauth]/route';

export default async function Home() {
  const session = await getServerSession(authOptions);
  console.log('This is the serverside session: ', session);

  if (session) {
    redirect('/');
  }

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
