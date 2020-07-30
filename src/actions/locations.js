import axios from 'axios';

export const setShowPublic = (showPublic) => {
  return {
    type: 'SET_SHOW_PUBLIC',
    value: showPublic,
  };
}

export const fetchLocations = (showPublic = false) => {
  return async (dispatch) => {
    const result = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/locations?public=${showPublic}`, {
      withCredentials: true,
    });

    const locations = result.data;

    dispatch({
      type: 'FETCH_LOCATIONS',
      locations,
    });
  };
};

export const addLocation = (latitude, longitude, description, isPublic) => {
  return async (dispatch) => {
    const result = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/locations`, {
      latitude,
      longitude,
      description,
      isPublic,
    }, {
      withCredentials: true,
    });

    const location = result.data;

    dispatch({
      type: 'ADD_LOCATION',
      location,
    });
  };
};

export const deleteLocation = (id) => {
  return async (dispatch) => {
    await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/locations/${id}`, {
      withCredentials: true,
    });

    dispatch({
      type: 'DELETE_LOCATION',
      id,
    });
  };
};