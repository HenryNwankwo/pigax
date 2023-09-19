'use client';
import { useState } from 'react';
import Gallery from './Gallery';

function MainContainer() {
  const [loading, setLoading] = useState(true);
  return (
    <section className='pgx-main-section'>
      <h2 className='pgx-gallery-heading'>Image Gallery</h2>
      {loading ? (
        <div className='justify-self-center mx-auto'>Loading...</div>
      ) : (
        <Gallery></Gallery>
      )}
    </section>
  );
}

export default MainContainer;
