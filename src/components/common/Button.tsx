import Image from "next/image";
import { ReactNode } from "react";
import styled from "styled-components";

import arrow from '../../../public/images/long_right.svg'
import Typography from "./Typography";

interface ComponentProps {
  children: ReactNode;
  withoutIcon?: boolean;
}

const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 24px;
  padding: 8px 24px;
  border: 1px solid #000000;
  display: flex;
  align-items: center;
`;

const StyledTypography = styled(Typography)`
  font-size: 16px;
  font-weight: 600;
  line-height: 21px;
  margin-right: 18px;
`;

const Button = ({ children, withoutIcon }: ComponentProps) => {
  return (
    <StyledButton>
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
