'use client';
import { useState, useEffect } from 'react';
import Gallery from './Gallery';
import Loader from './Loader';
import GalleryCard from './GalleryCard';

function MainContainer() {
  const [loading, setLoading] = useState(true);
  const [photos, setPhotos] = useState([]);
  const API_KEY = process.env.NEXT_PUBLIC_PIXABAY_API_KEY;
  const url = `https://pixabay.com/api/?key=${API_KEY}&image_type=photo`;

  // A function that gets the photos from pexel.com
  const getPhotos = () => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('The response is not good');
        }
        return response.json();
      })
      .then((data) => {
        setPhotos(data.hits);
        setLoading((prev) => (prev === true ? false : prev));
        console.log('This is the data: ', data.hits);
        console.log('This is the photos: ', photos);
      })
      .catch((error) => {
        console.log('This error occured while getting photos: ', error);
      });
  };

  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <section className='pgx-main-section'>
      <h2 className='pgx-gallery-heading'>Image Gallery</h2>
      {loading ? (
        <div className='w-full h-28 flex justify-center items-center my-auto'>
          <Loader loading={loading}></Loader>
        </div>
      ) : (
        <Gallery>
          <GalleryCard></GalleryCard>
        </Gallery>
      )}
    </section>
  );
}

export default MainContainer;
