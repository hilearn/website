import styled from "styled-components";

import Typography from "./Typography";

interface ComponentProps {
  text: string;
}

const StyledTitle = styled(Typography)`
  font-weight: 600;
  line-height: 39px;
  margin-bottom: 24px;
  width: 100%;
  @media (min-width: ${({ theme }) => theme.breakpoints.m}) {
    text-align: center;
  }
`;

const BlockTitle = ({ text }: ComponentProps) => {
  return (
    <StyledTitle size="xl">
      {text}
    </StyledTitle>
  );
};

export default BlockTitle;
