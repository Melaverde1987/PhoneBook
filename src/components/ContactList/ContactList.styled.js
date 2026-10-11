import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 15px;

  p {
    min-width: 50%;
    margin-bottom: 0;
    font-size: 16px;

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      min-width: 250px;
      font-size: 18px;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      min-width: 300px;
    }
  }
`;

export const Name = styled.span`
  font-weight: 600;
  //color: ${({ theme }) => theme.colors.primary600};
`;
