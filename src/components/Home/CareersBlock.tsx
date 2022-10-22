import Image from 'next/image';
import styled from "styled-components";
import { useRouter } from 'next/router';

import HugeButton from "../common/HugeButton";
import website from '../../../public/images/optimized/website.svg';
import BlockTitle, { BlockSubtitle } from "../common/BlockTypography";
import Button from "../common/Button";
import careers from '../../../public/images/optimized/careers.svg';
import { homePageBlocksSpacing } from '../../sharedStyles';
import PagePaths from '../../utils/constants/pagePaths';


const Container = styled.div`
  ${homePageBlocksSpacing}
  display: grid;
  grid-template: 1fr / 1fr 1fr;
  @media (max-width: ${({ theme }) => theme.breakpoints.withImageBlock}) {
    display: flex;
    flex-direction: column;
  }
`;

const Content = styled.div`
  margin-right: 40px;
  margin-bottom: 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.withImageBlock}) {
    margin-right: 0;
    margin-bottom: 60px;
  }
`;

const ButtonContainer = styled.div`
  margin: 32px 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.withImageBlock}) {
    display: flex;
    justify-content: center;
  }
`;

const CareersBlock = () => {
  const router = useRouter();

  const handleGoToCareers = () => {
    router.push(PagePaths.careers);
  };

  return (
    <Container>
      <Content>
        <BlockTitle text="Careers" />
        <BlockSubtitle margin="0 0 24px 0">
          HiLearn is always looking for well-rounded specialists that are proficient in creating engaging experiences and are
          familiar with all aspects of product development from ideation to implementation.
        </BlockSubtitle>
        <HugeButton
          iconSrc={website}
          title="Front-end engineer"
          caption="Mid"
          onClick={handleGoToCareers}
          withBottomGutter
        />
        <ButtonContainer>
          <Button onClick={handleGoToCareers}>
            See all vacancies
          </Button>
        </ButtonContainer>
      </Content>
      <Image
        src={careers}
        alt="Careers"
      />
    </Container>
  );
};

export default CareersBlock;
