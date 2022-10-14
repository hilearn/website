import { ReactNode } from "react";
import styled from "styled-components";

interface ComponentProps {
  children: ReactNode;
}

const StyledTitle = styled.h1`
  font-size: 32px;
  font-weight: 800;
  line-height: 39px;
  font-family: Inter;
  letter-spacing: 0em;
  color: ${({ theme }) => theme.colors.text.primary};
`;

const PageTitle = ({ children }: ComponentProps) => {
  return (
    <StyledTitle>
      {children}
    </StyledTitle>
  );
};

export default PageTitle;
