import React from 'react';
import PublicMarker from './marker_public.png';
import PrivateMarker from './marker_private.png';
import { Popup } from 'semantic-ui-react';

export default function LocationMarker({ isPublic, description }) {
  return (
    <div>
      <Popup
        content={description}
        trigger={<img src={isPublic ? PublicMarker : PrivateMarker} alt="Random Location" width="40px" />}
        inverted
      />
    </div>
  );
}