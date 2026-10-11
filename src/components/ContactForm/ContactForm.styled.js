import { ErrorMessage } from 'formik';
import styled from 'styled-components';

export const FormContainer = styled.div`
  background: ${({ theme }) => theme.colors.white};
  padding: 20px;
  border-radius: 5px;
  flex-basis: 100%;
  outline: 2px dashed ${({ theme }) => theme.colors.gray800};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-basis: 35%;
  }
`;

export const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const Error = styled(ErrorMessage).attrs({
  component: 'p',
})`
  color: red;
  font-size: 14px;
  margin-top: 0.5em;
`;
