import { ErrorMessage } from 'formik';
import styled from 'styled-components';

export const FormContainer = styled.div`
  background: ${({ theme }) => theme.colors.white};
  padding: 20px;
  border-radius: 5px;
  margin-block: 30px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 50%;
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
  position: relative;
  z-index: 2;
`;

export const InputControl = styled.div`
  position: relative;
`;

export const ToggleButton = styled.button`
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translateY(-50%);
  display: grid;
  place-items: center;

  svg {
    width: 20px;
    height: 20px;
  }
`;
