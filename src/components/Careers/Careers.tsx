import styled from "styled-components";
import PageTitle from "../common/PageTitle";
import Typography from "../common/Typography";
import Benefits from "./Benefits";
import OpenPositions from "./OpenPositions";

const Container = styled.div`

`;

const Careers = () => {
  return (
    <Container>
      <PageTitle>
        Careers
      </PageTitle>
      <OpenPositions />
      <Benefits />
    </Container>
  );
};

export default Careers;
