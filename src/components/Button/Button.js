import { CustomBtn } from './Button.styled';

export const Button = ({ children, mode, ...props }) => {
  return (
    <CustomBtn $mode={mode} {...props}>
      {children}
    </CustomBtn>
  );
};
