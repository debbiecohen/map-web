import immer from 'immer';

const initialState = {
  user: null,
  locations: [],
  showPublicLocations: false,
  addLocation: false,
  mapCenter: { latitude: 52.3703911, longitude: 4.8905929 },
};

const locationsReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'USER_SIGNUP':
      return state;

    case 'USER_SIGNIN':
      state.user = action.user;
      return state;

    case 'FETCH_LOCATIONS':
      state.locations = action.locations;
      return state;

    case 'ADD_LOCATION':
      state.locations.push(action.location);
      return state;

    case 'DELETE_LOCATION':
      state.locations = state.locations.filter(location => location.id !== action.id);
      return state;

    case 'SET_SHOW_PUBLIC':
      state.showPublicLocations = action.value;
      return state;

    case 'SHOW_ADD_LOCATION_MODAL':
      state.addLocation = { latitude: action.latitude, longitude: action.longitude };
      return state;

    case 'HIDE_ADD_LOCATION_MODAL':
      state.addLocation = false;
      return state;

    case 'SET_MAP_CENTER':
      state.mapCenter = { latitude: action.latitude, longitude: action.longitude };
      return state;

    default:
      return state;
  }
};

export default immer(locationsReducer);