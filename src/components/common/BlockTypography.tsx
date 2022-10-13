import styled from "styled-components";

import { responsiveAlignment } from "../../sharedStyles";

import Typography from "./Typography";

interface ComponentProps {
  text: string;
}

const StyledTitle = styled(Typography)`
  ${responsiveAlignment}
  font-weight: 600;
  line-height: 39px;
  margin-bottom: 40px;
`;

export const BlockSubtitle = styled(Typography)`
  ${responsiveAlignment}
  font-weight: 400;
  line-height: 21px;
`;

const BlockTitle = ({ text }: ComponentProps) => {
  return (
    <StyledTitle size="xl">
      {text}
    </StyledTitle>
  );
};

export default BlockTitle;
