'use client';
import Link from 'next/link';
import Image from 'next/image';
import {
  RiMenu4Line,
  RiCloseLine,
  RiSearchLine,
  RiArrowRightLine,
} from 'react-icons/ri';
import { useEffect, useRef, useState } from 'react';
import LoginForm from './LoginForm';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const navRef = useRef(null);
  const getStartedRef = useRef(null);
  const menuRef = useRef(null);
  const loginFormRef = useRef(null);

  //Toggling login form
  const openLoginHandler = () => {
    setIsLoginOpen((prev) => !prev);
  };

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
        <article className='pgx-search-group'>
          <input
            type='text'
            name='search'
            id='search'
            placeholder='Search for images...'
            className='pgx-search-input'
          />
          <label htmlFor='search' className='pgx-search-icon'>
            <RiSearchLine className='text-orange-500 text-2xl'></RiSearchLine>
          </label>
        </article>
        <article className='pgx-image-login-group'>
          <div className='pgx-image-group'>
            <div className='pgx-avatar-group'>
              <p className='pgx-username'>Henry</p>
              <Image
                src=''
                alt='avatar image'
                width={40}
                height={40}
                className='pgx-user-avatar'
              />
            </div>
            <button type='button' className='pgx-btn pgx-logout-btn'>
              Log out
            </button>
          </div>
          <button
            type='button'
            className='pgx-btn pgx-login-btn'
            onClick={openLoginHandler}
            ref={getStartedRef}
          >
            Get started{' '}
            <RiArrowRightLine className='ml-2 text-lg text-white'></RiArrowRightLine>
          </button>
          {isLoginOpen ? <LoginForm ref={loginFormRef}></LoginForm> : null}
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
