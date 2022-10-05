import styled from "styled-components";
import Typography from "./Typography";

interface ComponentProps {
  text: string;
}

const StyledTitle = styled(Typography)`
  font-size: 32px;
  font-weight: 600;
  line-height: 39px;
  margin-bottom: 24px;
`;

const BlockTitle = ({ text }: ComponentProps) => {
  return (
    <StyledTitle>
      {text}
    </StyledTitle>
  );
};

export default BlockTitle;
