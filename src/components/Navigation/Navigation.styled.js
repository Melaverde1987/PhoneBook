import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;

  a {
    font-size: 18px;
    font-weight: 500;

    &.active {
      color: ${({ theme }) => theme.colors.primary500};
    }
  }
`;
