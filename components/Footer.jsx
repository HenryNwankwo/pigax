import Link from 'next/link';
import {
  FaSquareFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa6';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='pgx-footer'>
      <article className='pgx-social-links'>
        <Link href='#'>
          <FaSquareFacebook className='pgx-social-icons' />
        </Link>
        <Link href='#'>
          <FaInstagram className='pgx-social-icons' />
        </Link>
        <Link href='#'>
          <FaTwitter className='pgx-social-icons' />
        </Link>
        <Link href='#'>
          <FaYoutube className='pgx-social-icons' />
        </Link>
      </article>
      <article className='pgx-foot-links'>
        <Link href='#'> Conditions of Use </Link>
        <Link href='#'> Privacy & Policy</Link>
      </article>
      <article className='pgx-copyright'>
        <p> &copy; {`${currentYear} Pigax by Nwankwo Henry Ifunanya`} </p>
      </article>
    </footer>
  );
};

export default Footer;
