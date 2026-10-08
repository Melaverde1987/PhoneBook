import styled, { css } from 'styled-components';

export const CustomBtn = styled.button`
  padding: 11px 17px;
  border-radius: ${({ theme }) => theme.radii.sm};

  ${({ $mode }) =>
    $mode === 'primary' &&
    css`
      background-color: ${({ theme }) => theme.colors.primary500};
      color: ${({ theme }) => theme.colors.white};
      transition:
        box-shadow ${({ theme }) => theme.transition.normal},
        background-color ${({ theme }) => theme.transition.normal};

      &:hover {
        box-shadow: rgba(0, 0, 0, 0.48) 0 4px 12px;
        color: ${({ theme }) => theme.colors.white};
      }
    `}

  ${({ $mode }) =>
    $mode === 'outline' &&
    css`
      /*
      border: 1px solid ${({ theme }) => theme.colors.primary500};
      color: ${({ theme }) => theme.colors.primary500};
      transition:
        box-shadow ${({ theme }) => theme.transition.normal},
        border ${({ theme }) => theme.transition.normal},
        color ${({ theme }) => theme.transition.normal};

      &:hover {
        box-shadow: rgba(0, 0, 0, 0.48) 0 4px 12px;
        color: ${({ theme }) => theme.colors.primary500};
      }
        */
      /*
      padding: 11px 24px;
      color: ${({ theme }) => theme.colors.primary500};
      display: inline-block;
      transition: all ${({ theme }) => theme.transition.normal};
      border: 1px solid transparent;
      background-image:
        linear-gradient(
          ${({ theme }) => theme.colors.white},
          ${({ theme }) => theme.colors.white}
        ),
        radial-gradient(
          circle at left top,
          ${({ theme }) => theme.colors.primary500},
          ${({ theme }) => theme.colors.text}
        );
      background-origin: border-box;
      background-clip: padding-box, border-box;

      &:hover {
        box-shadow: #bea7dd 0px 0px 20px 0px;
      }
        */
      box-shadow:
        0px -6px 10px #b0acdb6e,
        0px 4px 15px rgba(0, 0, 0, 0.15);
      transition: 0.5s;
      border: none;
      background-color: #f2f2f2;
      border-radius: 0.5em;
      letter-spacing: 1px;
      text-align: center;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      color: ${({ theme }) => theme.colors.black};

      &:hover {
        box-shadow: 0 2px 0 rgba(0, 0, 0, 0.15);
      }
    `}
`;
