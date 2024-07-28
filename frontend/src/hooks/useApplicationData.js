import { useReducer, useEffect } from 'react';

const useApplicationData = () => {
  const initialState = {
    modal: null,
    favorites: [],
    photoData: [],
    topicData: []
  };

  const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
  const CLOSE_MODAL = 'CLOSE_MODAL';
  const SET_MODAL = 'SET_MODAL';
  const SET_PHOTO_DATA = 'SET_PHOTO_DATA';
  const SET_TOPIC_DATA = 'SET_TOPIC_DATA';

  const reducer = (state, action) => {
    switch (action.type) {
      case TOGGLE_FAVORITE:
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
      case CLOSE_MODAL:
        return {
          ...state,
          modal: null,
        }
      case SET_MODAL:
        return {
          ...state,
          modal: action.modal,
        };
      case SET_PHOTO_DATA:
        return {
          ...state,
          photoData: action.payload
        };
      case SET_TOPIC_DATA:
        return {
          ...state,
          topicData: action.payload
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  ////////////// UseEffect to fetch photos
  useEffect(() => {
    fetch('/api/photos')
      .then(res => res.json())
      .then(data => dispatch({ type: SET_PHOTO_DATA, payload: data }))
  }, []);

  ////////////// UseEffect to fetch topics
  useEffect(() => {
    fetch('/api/topics')
      .then(res => res.json())
      .then(data => dispatch({ type: SET_TOPIC_DATA, payload: data }))
  }, []);

  const closeModal = () => {
    dispatch({ type: CLOSE_MODAL });
  };

  const setModal = (selectedPhotoObj) => {
    dispatch({ type: SET_MODAL, modal: selectedPhotoObj });
  };

  const toggleFavorite = (id) => {
    dispatch({ type: TOGGLE_FAVORITE, id });
  };

  return { state, setModal, toggleFavorite, closeModal };
};

export default useApplicationData;