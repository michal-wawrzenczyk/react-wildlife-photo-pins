import React from 'react';
import styled from 'styled-components';
import { DetailsCard } from '../app/components/main/photos/gallery/DetailsCard';
import { Map } from '../app/components/main/photos/map/Map';

const PhotoDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  column-gap: 0.5rem;
`;

const PhotoDetails: React.FC = () => {
  return (
    <PhotoDetailsContainer>
      <DetailsCard />
      <Map />
    </PhotoDetailsContainer>
  );
};

export default PhotoDetails;
