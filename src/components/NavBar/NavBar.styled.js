import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.text};
  padding-block: 20px;
  width: 100%;
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
`;
