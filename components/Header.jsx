'use client';
import Link from 'next/link';
import Image from 'next/image';
import { RiMenu4Line, RiCloseLine, RiSearchLine } from 'react-icons/ri';
import { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <section className='pgx-header'>
      <div className='pgx-logo-group'>
        <Link href='/'>Pigax</Link>
      </div>
      <div className='pgx-search-login-group'>
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
            <Image
              src=''
              alt='avatar image'
              width={40}
              height={40}
              className='pgx-user-avatar'
            />
            <p className='pgx-username'>Henry</p>
            <button type='button' className='pgx-logout-btn'>
              Log out
            </button>
          </div>
          <button type='button' className='pgx-login-btn'>
            Login
          </button>
        </article>
      </div>
      <div className='pgx-menu-burger'>
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
