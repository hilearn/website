import Image from "next/image";
import styled from "styled-components";
import HeadingBgImage from "../../public/images/headingBgImage.svg";
import Typography from "./common/Typography";

const HeadingBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledTitle = styled(Typography)`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  font-size: 64px;
  line-height: 77px;
  color: #1C1C1C;
  width: 555px;
`;

const StyledSubTitle = styled(Typography)`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;
  color: #1C1C1C;
  width: 484px;
`;

const HeadingPart = () => (
  <HeadingBlock>
    <div>
      <StyledTitle>
        Innovating solutions for the FinTech industry
      </StyledTitle>
      <StyledSubTitle>
        Key partner for the several US fintech
        companies in the fields of data science,
        AI and ML, software development.
      </StyledSubTitle>
    </div>
    <Image src={HeadingBgImage} alt="" height="496px" max-width="808px" />
  </HeadingBlock>
);

export default HeadingPart;

