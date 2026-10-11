import styled from 'styled-components';

export const Menu = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  p,
  button {
    margin-bottom: 0;
    font-size: 16px;
    font-weight: 500;

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: 18px;
    }
  }
`;
