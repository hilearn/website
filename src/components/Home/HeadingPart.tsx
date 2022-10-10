import { useRouter } from "next/router";
import Image from "next/image";
import styled from "styled-components";

import DotImage from "../../../public/images/Dots.svg";
import HeadingBgImage from "../../../public/images/headingBgImage.svg";
import Button from "../common/Button";
import Typography from "../common/Typography";
import PagePaths from "../../utils/constants/pagePaths";

const HeadingBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 150px;
  @media(max-width: 1320px) {
    flex-direction: column;
    margin-left: 0;
  }
`;

const ImageContainer = styled.div`
  position: absolute;
  left: 0;
  top: 275px;
  @media(max-width: ${({ theme }) => theme.breakpoints.withImageBlock}) {
    top: 500px;
  };
  @media(max-width: 768px) {
    top: 400px;
  };
  @media(max-width: 540px) {
    display: none;
  };
`;

const Description = styled.div`
  max-width: 614px;
  @media(max-width: ${({ theme }) => theme.breakpoints.withImageBlock}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 614px;
    text-align: center;
  }
`;

const StyledTitle = styled(Typography)`
  font-weight: 800;
  line-height: 77px;
  width: 555px;
  @media(max-width: 768px) {
    width: 100%;
    font-size: 40px;
    line-height: 48px;
    text-align: center;
    margin-bottom: 24px;
  };
  @media(max-width: 375px) {
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 0;
  };
`;

const StyledSubTitle = styled(Typography)`
  font-weight: 400;
  line-height: 130%;
  max-width: 484px;
  margin-top: 24px;
  margin-bottom: 32px;
  @media(max-width: 375px) {
    margin-bottom: 24px;
  };
`;

const StyledImage = styled(Image)`
  @media(max-width: ${({ theme }) => theme.breakpoints.withImageBlock}) {
    margin-top: 40px !important;
    padding-bottom: 40px !important;
  };
`;

const HeadingPart = () => {
  const router = useRouter();

  const handelGoToTeam = () => (
    router.push(PagePaths.team)
  );

  return(
    <HeadingBlock>
      <ImageContainer>
        <Image src={DotImage} alt="Dots" />
      </ImageContainer>
      <Description>
        <StyledTitle size="xxxl">
          Innovating solutions for the FinTech industry
        </StyledTitle>
        <StyledSubTitle>
          Key partner for the several US fintech
          companies in the fields of data science,
          AI and ML, software development.
        </StyledSubTitle>
        <Button onClick={handelGoToTeam}>Join our team</Button>
      </Description>
      <StyledImage src={HeadingBgImage} alt="" />
    </HeadingBlock>
  );
};

export default HeadingPart;

