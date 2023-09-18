import Link from 'next/link';

function Header() {
  return (
    <section className='pgx-header'>
      <div className='pgx-logo-group'>
        <Link href='/'>Pigax</Link>
      </div>
      <div>
        <article className='pgx-search-group'>
          <input type='text' name='search' id='search' />
          <label htmlFor='search'></label>
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
    </section>
  );
}

export default Header;
