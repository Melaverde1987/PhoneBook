import styled from 'styled-components';

export const List = styled.ul`
  background: ${({ theme }) => theme.colors.white};
  padding: 20px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  border-radius: ${({ theme }) => theme.radii.sm};
  margin-bottom: 30px;
  max-width: 60%;
  margin-left: auto;
  margin-right: auto;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 15px;

  p {
    min-width: 300px;
    margin-bottom: 0;
    font-size: 18px;
  }
`;

export const Name = styled.span`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary600};
`;
