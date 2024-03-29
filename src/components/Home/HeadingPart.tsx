import { useRouter } from "next/router";
import Image from "next/image";
import styled from "styled-components";

import HeadingBgImage from "../../../public/images/headingBgImage.svg";
import Button from "../common/Button";
import Typography from "../common/Typography";

const HeadingBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  @media(max-width: 1320px) {
    flex-direction: column;
    margin-left: 0;
    position: unset;
  }
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

const RightImageBlock = styled.div`
  position: absolute;
  max-width: 670px;
  right: 0;
  @media(max-width: 1320px) {
    position: unset;
  }
`;

const HeadingPart = () => {
  const router = useRouter();

  const handelGoToTeam = () => (
    router.push("#partners")
  );

  return(
    <HeadingBlock>
      <Description>
        <StyledTitle size="xxxl" forwardedAs="h1">
          Innovating solutions for the FinTech industry
        </StyledTitle>
        <StyledSubTitle>
          Key partner for the several US fintech companies in the fields of AI/ML, Data Science and Quantitative Analysis.
        </StyledSubTitle>
        <Button onClick={handelGoToTeam}>See our partners</Button>
      </Description>
      <RightImageBlock>
        <StyledImage src={HeadingBgImage} alt="" />
      </RightImageBlock>
    </HeadingBlock>
  );
};

export default HeadingPart;

