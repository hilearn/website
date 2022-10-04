import styled from "styled-components";
import Typography from "./Typography";
import Doc from "../../../public/images/doc.png";

const Box = styled.div`
  height: 137px;
  width: 270px;
  padding: 16px;
  border-radius: 16px;
  background-color: #F3F1EA;
`;

const AgilityBox = (agility) => (
  <Box>
    <img src={Doc} alt="doc" />
    <Typography>{agility}</Typography>
  </Box>
);

export default AgilityBox;
