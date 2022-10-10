import styled from "styled-components";
import Image from "next/image";

import Typography from "./Typography";

const Box = styled.div`
  width: 21%;
  padding: 16px 16px 24px 16px;
  border-radius: 16px;
  background-color: #F3F1EA;
  @media(max-width: 920px) {
    width: 100%;
  }
`;

const StyledTitle = styled(Typography)`
  font-weight: 500;
  line-height: 130%;
`;

const StyledSubtitle = styled(Typography)`
  font-weight: 400;
  font-size: 12px;
  line-height: 130%;
  color: #1C1C1C;
  opacity: 0.6;
`;

const AgilityBox = ({ img, title, subtitle }) => (
  <Box>
    <Image src={img} alt="Doc" width={60} height={60} />
    <StyledTitle margin="16px 0 0 0">{title}</StyledTitle>
    <StyledSubtitle margin="4px 0 0 0">{subtitle}</StyledSubtitle>
  </Box>
);

export default AgilityBox;
