import Image from "next/image";
import { ReactNode } from "react";
import styled from "styled-components";

import arrow from '../../../public/images/optimized/long_right.svg';
import { clearDefaultButtonStyles } from "../../sharedStyles";

import Typography from "./Typography";

interface ComponentProps {
  children: ReactNode;
  withoutIcon?: boolean;
  onClick?: VoidFunction;
}

const StyledButton = styled.button`
  ${clearDefaultButtonStyles}
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 24px;
  padding: 8px 24px;
  border: 1px solid #000000;
  display: flex;
  align-items: center;
  transition: background-color 300ms;
  user-select: none;
  :hover {
    background-color: ${({ theme }) => theme.colors.hover.onPrimary};
  }
`;

const StyledTypography = styled(Typography)`
  font-weight: 600;
  line-height: 21px;
  margin-right: 18px;
`;

const Button = ({ children, withoutIcon, onClick }: ComponentProps) => {
  return (
    <StyledButton onClick={onClick}>
      <StyledTypography>
        {children}
      </StyledTypography>
      {!withoutIcon && (
        <Image src={arrow} alt="" />
      )}
    </StyledButton>
  );
};

export default Button;
