import Image from 'next/image';

import HugeButton from "../common/HugeButton";
import website from '../../../public/images/website.svg';
import settings from '../../../public/images/settings.svg';
import styled from "styled-components";
import BlockTitle from "../common/BlockTitle";
import Typography from "../common/Typography";
import Button from "../common/Button";
import careers from '../../../public/images/careers.svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledTypography = styled(Typography)`
  font-size: 16px;
  font-weight: 400;
  line-height: 21px;
`;

const ButtonContainer = styled.div`
  margin: 32px 0;
`;

const Careers = () => {
  return (
    <Container>
      <BlockTitle text="Careers" />
      <StyledTypography margin="0 0 24px 0">
        HiLearn is always looking for well-rounded specialists that are proficient in creating engaging experiences and are
        familiar with all aspects of product development from ideation to implementation.
      </StyledTypography>
      <HugeButton
        iconSrc={website}
        title="Front-end engineer"
        caption="Lead"
        withBottomGutter
      />
      <HugeButton
        iconSrc={settings}
        title="Quant Engineer"
        caption="Senior/Mid/Junior/Intern"
      />
      <ButtonContainer>
        <Button>
          See all vacancies
        </Button>
      </ButtonContainer>
      <Image
        src={careers}
        alt="Careers"
      />
    </Container>
  );
};

export default Careers;
