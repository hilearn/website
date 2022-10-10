import styled from "styled-components";
import Typography from "./Typography";
import Doc from "../../../public/images/doc.png";
import Image from "next/image";

const Box = styled.div`
  height: 137px;
  width: 21%;
  padding: 16px;
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
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
`;

const AgilityBox = ({ agility }) => (
  <Box>
    <Image src={Doc} alt="Doc" width={60} height={60} />
    <StyledTypography margin="16px 0 24px">{agility}</StyledTypography>
  </Box>
);

export default AgilityBox;
