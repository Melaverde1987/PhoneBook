import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;

  a {
    font-size: 16px;
    font-weight: 500;

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: 18px;
    }

    &.active {
      color: ${({ theme }) => theme.colors.primary500};
    }
  }
`;
