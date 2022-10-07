import Image from 'next/image';

import HugeButton from "../common/HugeButton";
import website from '../../../public/images/website.svg';
import settings from '../../../public/images/settings.svg';
import styled from "styled-components";
import BlockTitle from "../common/BlockTitle";
import Typography from "../common/Typography";
import Button from "../common/Button";
import careers from '../../../public/images/careers.svg';
import { homePageBlocksSpacing } from '../../sharedStyles';
import { useRouter } from 'next/router';

const Container = styled.div`
  ${homePageBlocksSpacing}
  display: flex;
  flex-direction: row;
  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    display: flex;
    flex-direction: column;
  }
`;

const Content = styled.div`
  margin-right: 40px;
  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    margin-right: 0;
  }
`;

const StyledTypography = styled(Typography)`
  font-weight: 400;
  line-height: 21px;
`;

const ButtonContainer = styled.div`
  margin: 32px 0;
`;

const CareersBlock = () => {
  const router = useRouter();

  const handleGoToCareers = () => {
    router.push('/careers');
  };

  return (
    <Container>
      <Content>
        <BlockTitle text="Careers" />
        <StyledTypography margin="0 0 24px 0">
          HiLearn is always looking for well-rounded specialists that are proficient in creating engaging experiences and are
          familiar with all aspects of product development from ideation to implementation.
        </StyledTypography>
        <HugeButton
          iconSrc={website}
          title="Front-end engineer"
          caption="Lead"
          onClick={handleGoToCareers}
          withBottomGutter
        />
        <HugeButton
          iconSrc={settings}
          title="Quant Engineer"
          caption="Senior/Mid/Junior/Intern"
          onClick={handleGoToCareers}
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
