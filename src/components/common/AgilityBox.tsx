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
    <Image src={Doc} alt="Doc" />
    <Typography>{agility}</Typography>
  </Box>
);

export default AgilityBox;
