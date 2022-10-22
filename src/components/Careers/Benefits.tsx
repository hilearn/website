import styled from "styled-components";

import assignment from '../../../public/images/optimized/assignment.svg';
import benefits from "../../utils/constants/benefits";
import Benefit from "../common/Benefit";
import Typography from "../common/Typography";

const Container = styled.div`
  margin-top: 80px;
`;

const Content = styled.div`
  display: grid;
  grid-template: auto / 1fr 1fr;
  grid-gap: 40px;
  margin-top: 32px;
  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    grid-template: auto / 1fr;
  }
`;

const StyledTypography = styled(Typography)`
  font-weight: 600;
  line-height: 39px;
`;

const Benefits = () => {
  return (
    <Container>
      <StyledTypography size="xl">
        Our benefits
      </StyledTypography>
      <Content>
        {benefits.map((b, i) => (
          <Benefit
            key={i}
            icon={assignment}
            text={b}
          />
        ))}
      </Content>
    </Container>
  );
};

export default Benefits;
