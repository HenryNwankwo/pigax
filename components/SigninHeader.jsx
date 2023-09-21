import Link from 'next/link';

function Header() {
  return (
    <section className='pgx-header'>
      <div className='pgx-logo-group'>
        <Link href='/'>Pigax</Link>
      </div>
    </section>
  );
}

export default Header;
