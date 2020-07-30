import React, { useState } from 'react'
import { Button, Header, Icon, Modal, Input, Checkbox } from 'semantic-ui-react'
import { useSelector, useDispatch } from 'react-redux';
import styled from '@emotion/styled';
import { hideModal } from '../../actions/ui';
import { addLocation } from '../../actions/locations';

const InputFieldContainer = styled.div`
  margin-bottom: 20px;
`;

const AddLocationModal = () => {
  const dispatch = useDispatch();
  const location = useSelector(state => state.addLocation);
  const [locationName, setLocationName] = useState('');
  const [isPublic, setIsPublic] = useState(false);

  const showModal = !!location;

  const handleSubmitLocation = async () => {
    await dispatch(addLocation(location.latitude, location.longitude, locationName, isPublic));
    dispatch(hideModal());
  };

  return (
    <Modal open={showModal} basic size='small'>
      <Header icon='map marker alternate' content='Add a new location' />
      <Modal.Content>
        <InputFieldContainer>
          <Input placeholder='Location name...' value={locationName} onChange={e => setLocationName(e.target.value)} />
        </InputFieldContainer>
        <InputFieldContainer>
          <Checkbox checked={isPublic} onChange={(e, data) => setIsPublic(data.checked)} /> Make this location public
        </InputFieldContainer>
      </Modal.Content>
      <Modal.Actions>
        <Button basic color='red' inverted onClick={() => dispatch(hideModal())}>
          <Icon name='remove' /> Cancel
        </Button>
        <Button color='green' inverted onClick={handleSubmitLocation}>
          <Icon name='checkmark' /> Add Location
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default AddLocationModal