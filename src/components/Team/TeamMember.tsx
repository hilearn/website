import Image, { StaticImageData } from "next/image";
import styled from "styled-components";

import Typography from "../common/Typography";
import Linkedin from "../common/Linkedin";

interface ComponentProps {
  imageSrc: StaticImageData;
  fullName: string;
  jobPosition: string;
  linkedinUrl: string;
}

const StyledImage = styled(Image)`
  border-radius: 16px;
`;

const FullName = styled(Typography)`
  font-weight: 600;
  line-height: 19px;
  @media (max-width: 400px) {
    font-size: 14px;
  }
`;

const JobPosition = styled(Typography)`
  font-weight: 400;
  line-height: 17px;
  @media (max-width: 400px) {
    font-size: 12px;
    font-weight: 400;
    line-height: 15px;
  }
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
    linkedinUrl,
  } = props;
  return (
    <div>
      <StyledImage
        src={imageSrc}
        alt={fullName}
      />
      <FullName margin="16px 0 8px 0">
        {fullName}
      </FullName>
      <JobPosition size="sm">
        {jobPosition}
      </JobPosition>
      <IconsContainer>
        {linkedinUrl && (
          <Linkedin href={linkedinUrl} />
        )}
      </IconsContainer>
    </div>
  );
};

export default TeamMember;