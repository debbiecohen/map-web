export const showModal = (latitude, longitude) => {
    return {
      type: 'SHOW_ADD_LOCATION_MODAL',
      latitude,
      longitude,
    };
};
  
export const hideModal = () => {
    return {
        type: 'HIDE_ADD_LOCATION_MODAL',
    };
};

export const setMapCenter = (latitude, longitude) => {
    return {
        type: 'SET_MAP_CENTER',
        latitude,
        longitude,
    };
};