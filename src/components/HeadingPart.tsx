import Image from "next/image";
import styled from "styled-components";
import HeadingBgImage from "../../public/images/headingBgImage.svg";
import Typography from "./common/Typography";

const HeadingBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media(max-width: 768px) {
    flex-direction: column;
  }
`;

const Description = styled.div`
  @media(max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 614px;
  }
`;

const StyledTitle = styled(Typography)`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  font-size: 64px;
  line-height: 77px;
  color: #1C1C1C;
  max-width: 555px;
  @media(max-width: 768px) {
    max-width: 614px;
    font-size: 40px;
    line-height: 48px;
    text-align: center;
    margin-bottom: 24px;
  };
`;

const StyledSubTitle = styled(Typography)`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;
  color: #1C1C1C;
  width: 484px;
  @media(max-width: 768px) {
    text-align: center;
    margin-bottom: 32px;
  }
`;

const HeadingPart = () => (
  <HeadingBlock>
    <Description>
      <StyledTitle>
        Innovating solutions for the FinTech industry
      </StyledTitle>
      <StyledSubTitle>
        Key partner for the several US fintech
        companies in the fields of data science,
        AI and ML, software development.
      </StyledSubTitle>
    </Description>
    <Image src={HeadingBgImage} alt="" />
  </HeadingBlock>
);

export default HeadingPart;

