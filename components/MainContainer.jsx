'use client';
import { useState } from 'react';
import Gallery from './Gallery';
import Loader from './Loader';

function MainContainer() {
  const [loading, setLoading] = useState(false);
  return (
    <section className='pgx-main-section'>
      <h2 className='pgx-gallery-heading'>Image Gallery</h2>
      {loading ? (
        <div className='w-full h-28 flex justify-center items-center my-auto'>
          <Loader loading={loading}></Loader>
        </div>
      ) : (
        <Gallery></Gallery>
      )}
    </section>
  );
}

export default MainContainer;
