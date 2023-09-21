'use client';
import { useState, useEffect } from 'react';
import Gallery from './Gallery';
import Loader from './Loader';
import GalleryCard from './GalleryCard';
import { usePigaxContext } from '@/app/PigaxContext';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

function MainContainer() {
  const {
    loading,
    setLoading,
    photos,
    setPhotos,
    galleryPhotos,
    setGalleryPhotos,
    draggablePhotos,
    setDraggablePhotos,
  } = usePigaxContext();

  //const [draggablePhotos, setDraggablePhotos] = useState(galleryPhotos);

  const API_KEY = process.env.NEXT_PUBLIC_PIXABAY_API_KEY;
  const url = `https://pixabay.com/api/?key=${API_KEY}&image_type=photo&editors_choice=true&orientation=horizontal`;

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
        setDraggablePhotos(data.hits);

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

  // Drag end handler
  const handleOnDragEnd = (result) => {
    // If dragged to non droppable destination return back
    if (!result.destination) return;

    // updating the position of the image on drag end

    const newPhotos = Array.from(draggablePhotos);
    const [reorderedPhoto] = newPhotos.splice(result.source.index, 1);
    newPhotos.splice(result.destination.index, 0, reorderedPhoto);
    setDraggablePhotos(newPhotos);
    setGalleryPhotos(newPhotos);
    console.log(result);
  };

  return (
    <section className='pgx-main-section'>
      <h2 className='pgx-gallery-heading'>Image Gallery</h2>
      {loading ? (
        <div className='w-full h-28 flex justify-center items-center my-auto'>
          <Loader loading={loading}></Loader>
        </div>
      ) : (
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId='pixabayGallery'>
            {(provided) => (
              <section
                className='pgx-gallery'
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {draggablePhotos.map((photo, index) => (
                  <Draggable
                    key={photo.id}
                    draggableId={`${photo.id}`}
                    index={index}
                  >
                    {(provided) => (
                      <article
                        className='pgx-gallery-card'
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        <GalleryCard
                          imageAlt={photo.pageURL}
                          imageURL={photo.previewURL}
                          tags={photo.tags}
                        ></GalleryCard>
                      </article>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </section>
            )}
          </Droppable>
        </DragDropContext>
      )}
      {/* 
      <Gallery>
          {galleryPhotos.map((photo) => (
            <GalleryCard
              key={photo.id}
              imageAlt={photo.pageURL}
              imageURL={photo.previewURL}
              tags={photo.tags}
            ></GalleryCard> */}
    </section>
  );
}

export default MainContainer;
