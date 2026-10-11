import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.text};
  padding: 20px;
  width: 100%;
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
  row-gap: 16px;
`;

export const Logo = styled.div`
  font-size: 22px;
  font-weight: 600;
  flex-basis: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 24px;
    flex-basis: auto;
  }

  a {
    background: linear-gradient(
      45deg,
      ${({ theme }) => theme.colors.primary500},
      ${({ theme }) => theme.colors.text}
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
