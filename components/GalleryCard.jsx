import Image from 'next/image';

function GalleryCard({ imageURL, imageAlt }) {
  return (
    <article className='pgx-gallery-card'>
      <Image
        src={imageURL}
        alt={imageAlt}
        width={100}
        height={100}
        className='pgx-gallery-image'
      />
      <button type='button' className='pgx-pic-tag'>
        Nature
      </button>
    </article>
  );
}

export default GalleryCard;
