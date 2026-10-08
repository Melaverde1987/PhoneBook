import styled from 'styled-components';

export const FilterContainer = styled.div`
  background: ${({ theme }) => theme.colors.white};
  padding: 20px;
  border-radius: ${({ theme }) => theme.radii.sm};
  margin-bottom: 30px;
  max-width: 60%;
  margin-left: auto;
  margin-right: auto;
`;
