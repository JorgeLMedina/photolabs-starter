import { useReducer } from 'react';

const useApplicationData = () => {
  const initialState = {
    modal: null,
    favorites: [],
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'TOGGLE_FAVORITE':
        const { id } = action;
        if (state.favorites.includes(id)) {
          return {
            ...state,
            favorites: state.favorites.filter(item => item !== id),
          };
        } else {
          return {
            ...state,
            favorites: [...state.favorites, id]
          };
        }
      case 'CLOSE_MODAL':
        return {
          ...state,
          modal: null,
        }
      case 'SET_MODAL':
        return {
          ...state,
          modal: action.modal,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  };

  const setModal = (selectedPhotoObj) => {
    dispatch({ type: 'SET_MODAL', modal: selectedPhotoObj });
  };

  const toggleFavorite = (id) => {
    dispatch({ type: 'TOGGLE_FAVORITE', id });
  };

  return { state, setModal, toggleFavorite, closeModal };
};

export default useApplicationData;