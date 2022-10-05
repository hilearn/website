import HugeButton from "../common/HugeButton";

import website from '../../../public/images/website.svg';
import settings from '../../../public/images/settings.svg';
import styled from "styled-components";
import BlockTitle from "../common/BlockTitle";
import Typography from "../common/Typography";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledTypography = styled(Typography)`
  font-size: 16px;
  font-weight: 400;
  line-height: 21px;
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
    </Container>
  );
};

export default Careers;
