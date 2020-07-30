import React from 'react';
import styled from '@emotion/styled';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Icon } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';
import { deleteLocation, setShowPublic } from '../../actions/locations';
import { setMapCenter } from '../../actions/ui';

const LocationItem = styled.div`
  padding: 20px;

  &:hover {
    background: #dedede;
    cursor: pointer;
  }
`;

const Filters = styled.div`
  background: #8095A8;
  padding: 10px;
  color: white;
`;

export default function SideMenu() {
  const history = useHistory();
  const locations = useSelector((state) => state.locations);
  const dispatch = useDispatch();

  const renderLocationItems = () =>
    locations.map((location) => {
      const { description, id, latitude, longitude } = location;

      const handleLocationClick = () => {
        dispatch(setMapCenter(latitude, longitude));
      };

      return (
        <LocationItem key={id} onClick={handleLocationClick}>
          <p>{description}</p>
          {location.canDelete && <button onClick={() => dispatch(deleteLocation(id))}>Delete</button>}
        </LocationItem>
      );
    });

  const handleFilterChange = (event) => {
    dispatch(setShowPublic(event.target.checked));
  };

  const handleSignOut = async () => {
    // sign out
    await axios.post(`${process.env.REACT_APP_BACKEND_URL}/auth/signout`, {}, { withCredentials: true });
    // redirect to sign in
    history.push('/signin');
  };

  return (
    <div>
      <Filters>
        <p>
          Show public locations
          <input type="checkbox" onChange={handleFilterChange} />
        </p>
      </Filters>
      <div>
        {renderLocationItems()}
      </div>
      <div>
        <Button icon labelPosition='left' onClick={handleSignOut}>
          <Icon name='sign-out' />
          Sign out
        </Button>
      </div>
    </div>
  );
}