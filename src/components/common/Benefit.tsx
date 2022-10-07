import Image from "next/image";
import styled from "styled-components";

import Typography from "./Typography";

interface ComponentProps {
  icon: string;
  text: string;
}

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const ImageContainer = styled.div`
  background-color: #fff;
  border-radius: 16px;
  padding: 12px;
  margin-right: 16px;
`;

const StyledTypography = styled(Typography)`
  font-weight: 600;
  line-height: 21px;
`;

const Benefit = ({ icon, text }: ComponentProps) => {
  return (
    <Container>
      <ImageContainer>
        <Image layout="fixed" src={icon} alt="" width={36} height={36} />
      </ImageContainer>
      <StyledTypography>
        {text}
      </StyledTypography>
    </Container>
  );
};

export default Benefit;
