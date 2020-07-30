import React from 'react';
import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker';
import { useSelector, useDispatch } from 'react-redux';
import { showModal } from '../actions/ui';

function Map() {
  const locations = useSelector((state) => state.locations);
  const mapCenter = useSelector((state) => state.mapCenter);
  const dispatch = useDispatch();

  const renderMarkers = () =>
    locations.map((location) => {
      const { latitude, longitude, description, id, isPublic } = location;

      return (
        <LocationMarker
          key={id}
          lat={latitude}
          lng={longitude}
          description={description}
          isPublic={isPublic}
        />
      );
    });

  const handleAddLocation = event => {
    const { lat, lng } = event;
    dispatch(showModal(lat, lng));
  };

  const key = process.env.REACT_APP_API_KEY;
  const bootstrapURLKeys = key ? { key } : null;

  return (
    <GoogleMapReact
      bootstrapURLKeys={bootstrapURLKeys}
      center={{
        lat: mapCenter.latitude,
        lng: mapCenter.longitude,
      }}
      defaultZoom={17}
      onClick={handleAddLocation}
    >
      {renderMarkers()}
    </GoogleMapReact>
  );
}

export default React.memo(Map);
