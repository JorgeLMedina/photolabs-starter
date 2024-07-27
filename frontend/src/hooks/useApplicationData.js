import { useState } from 'react';

const useApplicationData = () => {
  const [modal, setModal] = useState(null);
  const [favorites, setFavorites] = useState([]);

  ////////////////////////// FAVORITES useState
  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      // remove ID from array(f)
      const newArr = favorites.filter(item => item !== id);
      setFavorites(newArr);
      return;
    }
    // add ID to array
    const newArr = [...favorites, id]
    setFavorites(newArr);
  };

  const closeModal = () => setModal(null);

  return { modal, setModal, favorites, toggleFavorite, closeModal };
};

export default useApplicationData;