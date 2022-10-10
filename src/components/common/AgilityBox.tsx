import styled from "styled-components";
import Image from "next/image";

import Doc from "../../../public/images/doc.png";

import Typography from "./Typography";

const Box = styled.div`
  width: 21%;
  padding: 16px 16px 24px 16px;
  border-radius: 16px;
  background-color: #F3F1EA;
  @media(max-width: 884px) {
    width: 20%;
  }
  @media(max-width: 768px) {
    width: 100%;
  }
`;

const StyledTypography = styled(Typography)`
  font-weight: 500;
  line-height: 130%;
`;

const AgilityBox = ({ agility }) => (
  <Box>
    <Image src={Doc} alt="Doc" width={60} height={60} />
    <StyledTypography margin="16px 0 0 0">{agility}</StyledTypography>
  </Box>
);

export default AgilityBox;
