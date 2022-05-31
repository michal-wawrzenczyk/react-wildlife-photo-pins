import React from 'react';
import styled from 'styled-components';
// import { ProvinceFilter } from './province/ProvinceFilter';
import { NameFilter } from './name/NameFilter';
import { SpeciesFilter } from './species/SpeciesFilter';
import { RatingFilter } from './rating/RatingFilter';
import { ProvinceFilter } from './province/ProvinceFilter';
import { ThemeProvider } from '@mui/styles';
import { filterElementTheme } from '../../../../styles/theme/filterElementTheme';

export const FilterContainer = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding: 1rem;
  background-color: whitesmoke;
  height: 50px;

  input,
  select {
    width: 250px;
    height: 30px;
    font-size: 16px;
  }
`;

export const Filter: React.FC = () => {
  return (
    <ThemeProvider theme={filterElementTheme}>
      <FilterContainer>
        <p>Filter by:</p>
        <RatingFilter />
        <ProvinceFilter />
        <NameFilter />
        <SpeciesFilter />
      </FilterContainer>
    </ThemeProvider>
  );
};

// napisać Hooka useFilters i trzymać tam te 4 filtry
