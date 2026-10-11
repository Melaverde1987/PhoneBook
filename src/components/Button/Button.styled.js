import styled, { css } from 'styled-components';

export const CustomBtn = styled.button`
  padding: 10px 17px;
  border-radius: ${({ theme }) => theme.radii.sm};

  ${({ $mode }) =>
    $mode === 'primary' &&
    css`
      background-color: ${({ theme }) => theme.colors.primary500};
      color: ${({ theme }) => theme.colors.white};
      padding: 10px 25px;
      box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
      position: relative;
      overflow: hidden;
      border: none;

      &:after {
        content: '';
        background-color: rgba(0, 0, 0, 0.4);
        position: absolute;
        top: 50%;
        left: 50%;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        transform: translate(-50%, -50%);
        opacity: 0;
      }

      &:hover {
        color: ${({ theme }) => theme.colors.white};
      }

      &:hover:after {
        animation: animate 1s ease-out;
      }

      @keyframes animate {
        0% {
          width: 5px;
          height: 5px;
          opacity: 1;
        }

        100% {
          width: 200px;
          height: 200px;
          opacity: 0;
        }
      }
    `}

  ${({ $mode }) =>
    $mode === 'outline' &&
    css`
      box-shadow:
        0px -6px 8px #d4d2e96e,
        0px 4px 10px rgba(0, 0, 0, 0.15);
      transition: 0.5s;
      border: none;
      background-color: #f2f2f2;
      border-radius: 0.5em;
      letter-spacing: 1px;
      text-align: center;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      font-size: 14px;
      color: ${({ theme }) => theme.colors.black};

      &:hover {
        box-shadow: 0 2px 0 rgba(0, 0, 0, 0.15);
      }
    `}
`;
