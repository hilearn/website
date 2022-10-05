import styled from "styled-components";
import Typography from "./Typography";
import Doc from "../../../public/images/doc.png";
import RoundedImage from "./RoundedImage";
import Image from "next/image";

const Box = styled.div`
  height: 137px;
  width: 270px;
  padding: 16px;
  border-radius: 16px;
  background-color: #F3F1EA;
`;

const AgilityBox = ({ agility }) => (
  <Box>
    <Image src={Doc} alt="Doc" width={60} height={60} />
    <Typography margin="16px 0 24px">{agility}</Typography>
  </Box>
);

export default AgilityBox;
