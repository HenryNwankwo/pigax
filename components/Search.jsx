import { usePigaxContext } from '@/PigaxContext';
import { useState } from 'react';
import { RiSearchLine } from 'react-icons/ri';

function Search() {
  const { photos, setGalleryPhotos } = usePigaxContext();

  //console.log('This is gallery photos in search:', galleryPhotos);

  const searchHandler = (e) => {
    setGalleryPhotos(
      photos.filter((photo) => photo.tags.includes(e.target.value))
    );
  };
  return (
    <article className='pgx-search-group'>
      <input
        type='text'
        name='search'
        id='search'
        placeholder='Search for images...'
        className='pgx-search-input'
        onChange={searchHandler}
      />
      <label htmlFor='search' className='pgx-search-icon'>
        <RiSearchLine className='text-orange-500 text-2xl'></RiSearchLine>
      </label>
    </article>
  );
}

export default Search;
