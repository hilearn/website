import styled from "styled-components";

import Typography, { ComponentProps as TypographyProps } from "./Typography";

type ComponentProps = TypographyProps;

const StyledTitle = styled(Typography)`
  font-size: 32px;
  font-weight: 800;
  line-height: 39px;
`;

const PageTitle = ({ children, ...props }: ComponentProps) => {
  return (
    <StyledTitle {...props} forwardedAs="h1">
      {children}
    </StyledTitle>
  );
};

export default PageTitle;
