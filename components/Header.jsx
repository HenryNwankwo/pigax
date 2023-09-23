'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { RiMenu4Line, RiCloseLine, RiArrowRightLine } from 'react-icons/ri';
import { useEffect, useRef, useState } from 'react';
import Search from './Search';
import { signOut, useSession } from 'next-auth/react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const navRef = useRef(null);
  const getStartedRef = useRef(null);
  const menuRef = useRef(null);
  const loginFormRef = useRef(null);
  const router = useRouter();
  const session = useSession();

  console.log('Header session: ', session);
  console.log('Header session data: ', session.data);
  console.log('Header session user: ', session.data?.user);
  //Toggling menu
  const menuHandler = () => {
    setIsMenuOpen((prev) => !prev);
  };

  //Handling menu click outside
  useEffect(() => {
    const loginFormClickHandler = (e) => {
      if (
        loginFormRef.current &&
        !loginFormRef.current.contains(e.target) &&
        !getStartedRef.current.contains(e.target)
      ) {
        setIsLoginOpen((prev) => (prev === true ? false : prev));
        console.log(isLoginOpen);
      }
    };
    window.addEventListener('click', loginFormClickHandler);

    return () => {
      window.removeEventListener('click', loginFormClickHandler);
    };
  }, []);

  return (
    <section className='pgx-header'>
      <div className='pgx-logo-group'>
        <Link href='/'>Pigax</Link>
      </div>
      <div
        className={`pgx-search-login-group ${isMenuOpen ? 'flex' : 'hidden'}`}
        ref={navRef}
      >
        <Search></Search>
        <article className='pgx-image-login-group'>
          {session.data !== null ? (
            <div className='pgx-image-group'>
              <div className='pgx-avatar-group'>
                <p className='pgx-username'>{session?.data?.user?.email}</p>
              </div>
              <button
                type='button'
                className='pgx-btn pgx-logout-btn'
                onClick={() => signOut({ redirect: false })}
              >
                Log out
              </button>
            </div>
          ) : null}
          {session.data === null ? (
            <button
              type='button'
              className='pgx-btn pgx-login-btn'
              onClick={() => router.push('/signin')}
              ref={getStartedRef}
            >
              Get started{' '}
              <RiArrowRightLine className='ml-2 text-lg text-white'></RiArrowRightLine>
            </button>
          ) : null}
        </article>
      </div>
      <div className='pgx-menu-burger' onClick={menuHandler} ref={menuRef}>
        {isMenuOpen ? (
          <RiCloseLine className='text-3xl text-orange-500'></RiCloseLine>
        ) : (
          <RiMenu4Line className='text-3xl text-orange-500'></RiMenu4Line>
        )}
      </div>
    </section>
  );
}

export default Header;
