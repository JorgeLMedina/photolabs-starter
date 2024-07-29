import { useReducer, useEffect } from 'react';

const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
const CLOSE_MODAL = 'CLOSE_MODAL';
const SET_MODAL = 'SET_MODAL';
const SET_PHOTO_DATA = 'SET_PHOTO_DATA';
const SET_TOPIC_DATA = 'SET_TOPIC_DATA';
const SET_PHOTO_BY_TOPIC_DATA = 'SET_PHOTO_BY_TOPIC_DATA';

const useApplicationData = () => {
  const initialState = {
    modal: null,
    favorites: [],
    photoData: [],
    topicData: [],
    photoByTopicId: null
  };

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
      case SET_PHOTO_BY_TOPIC_DATA:
        return {
          ...state,
          photoByTopic: action.photoByTopicId
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  ////////////// UseEffect to fetch photos and topics with Promise.all
  useEffect(() => {
    Promise.all([
      fetch('/api/photos').then(res => res.json()),
      fetch('/api/topics').then(res => res.json())
    ])
      .then(([photoData, topicData, photoByTopicData]) => {
        dispatch({ type: SET_PHOTO_DATA, payload: photoData });
        dispatch({ type: SET_TOPIC_DATA, payload: topicData });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      })
  }, []);

  useEffect(() => {
    if (initialState.photoByTopicId) {
      fetch(`/api/topics/photos/${photoByTopicId}`)
        .then(res => res.json())
        .then(data => dispatch({ type: SET_PHOTO_BY_TOPIC_DATA, payload: data }))
    }
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

  const setTopic = (topicId) => {
    dispatch({ type: SET_PHOTO_BY_TOPIC_DATA, photoByTopic: topicId });
  };

  return { state, setModal, toggleFavorite, closeModal, setTopic };
};

export default useApplicationData;