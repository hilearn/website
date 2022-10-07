import styled from "styled-components";
import theme from "../../theme";
import Typography from "./Typography";

interface ComponentProps {
  title: string;
  description: string;
  queue: string;
}

const Container = styled.div`
  position: relative;
  padding-left: 40px;
`;

const StyledTitle = styled(Typography)`
  font-weight: 500;
  line-height: 29px;
`;

const StyledQueue = styled(StyledTitle)`
  position: absolute;
  top: 0;
  left: 0;
`;

const StyledDescription = styled(Typography)`
  font-weight: 400;
  line-height: 18px;
  margin-top: 8px;
`;

const Advantage = (props: ComponentProps) => {
  const {
    queue,
    title,
    description
  } = props;

  return (
    <Container>
      <StyledQueue customColor={theme.colors.primary}>
        {queue}
      </StyledQueue>
      <StyledTitle size="lg">
        {title}
      </StyledTitle>
      <StyledDescription size="sm" color="secondary">
        {description}
      </StyledDescription>
    </Container>
  );
};

export default Advantage;
