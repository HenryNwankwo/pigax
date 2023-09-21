'use client';
import { useState, createContext, useContext } from 'react';

const PigaxContext = createContext(undefined);

export const PigaxProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [photos, setPhotos] = useState([]);
  const [galleryPhotos, setGalleryPhotos] = useState([]);
  const [draggablePhotos, setDraggablePhotos] = useState([]);
  return (
    <PigaxContext.Provider
      value={{
        loading,
        setLoading,
        photos,
        setPhotos,
        galleryPhotos,
        setGalleryPhotos,
        draggablePhotos,
        setDraggablePhotos,
      }}
    >
      {children}
    </PigaxContext.Provider>
  );
};

export const usePigaxContext = () => useContext(PigaxContext);
