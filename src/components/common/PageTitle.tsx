import { ReactNode } from "react";
import styled from "styled-components";

import Typography from "./Typography";

interface ComponentProps {
  children: ReactNode;
}

const StyledTitle = styled(Typography)`
  font-size: 32px;
  font-weight: 800;
  line-height: 39px;
  color: ${({ theme }) => theme.colors.text.primary};
`;

const PageTitle = ({ children }: ComponentProps) => {
  return (
    <StyledTitle as="h1">
      {children}
    </StyledTitle>
  );
};

export default PageTitle;
