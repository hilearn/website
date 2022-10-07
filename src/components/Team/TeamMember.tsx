import Image, { StaticImageData } from "next/image";
import styled from "styled-components";

import Typography from "../common/Typography";
import facebook from '../../../public/images/facebook.svg';
import linkedin from '../../../public/images/linkedin.svg';

interface ComponentProps {
  imageSrc: StaticImageData;
  fullName: string;
  jobPosition: string;
}

const Container = styled.div`

`;

const StyledImage = styled(Image)`
  border-radius: 16px;
`;

const FullName = styled(Typography)`
  font-weight: 600;
  line-height: 19px;
`;

const JobPosition = styled(Typography)`
  font-weight: 400;
  line-height: 17px;
`;

const IconsContainer = styled.div`
  display: flex;
  margin-top: 16px;
  grid-gap: 16px;
`;

const TeamMember = (props: ComponentProps) => {
  const {
    imageSrc,
    fullName,
    jobPosition,
  } = props;
  return (
    <Container>
      <StyledImage
        src={imageSrc}
        alt={fullName}
        width={213}
        height={213}
      />
      <FullName margin="16px 0 8px 0">
        {fullName}
      </FullName>
      <JobPosition size="sm">
        {jobPosition}
      </JobPosition>
      <IconsContainer>
        <Image src={facebook} alt="Facebook" />
        <Image src={linkedin} alt="Linkedin" />
      </IconsContainer>
    </Container>
  );
};

export default TeamMember;