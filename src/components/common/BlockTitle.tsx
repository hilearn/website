import styled from "styled-components";
import Typography from "./Typography";

interface ComponentProps {
  text: string;
}

const StyledTitle = styled(Typography)`
  font-size: 32px;
  font-weight: 600;
  line-height: 39px;
`;

const BlockTitle = ({ text }: ComponentProps) => {
  return (
    <StyledTitle as="h5">
      {text}
    </StyledTitle>
  );
};

export default BlockTitle;
