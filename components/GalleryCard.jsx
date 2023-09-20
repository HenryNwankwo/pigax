import Image from 'next/image';

function GalleryCard({ imageURL, imageAlt, tags }) {
  const imageTags = tags.split(/[," "]+/, 3);
  const uniqueTags = [...new Set(imageTags)];
  return (
    <article className='pgx-gallery-card'>
      <Image
        src={imageURL}
        alt={imageAlt}
        width={500}
        height={500}
        className='pgx-gallery-image'
      />
      <div className='pgx-tag-group'>
        {uniqueTags?.map((tag) => (
          <button type='button' className='pgx-pic-tag' key={tag}>
            {tag}
          </button>
        ))}
      </div>
    </article>
  );
}

export default GalleryCard;
