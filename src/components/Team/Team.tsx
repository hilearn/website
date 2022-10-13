import styled from "styled-components";

import members from "../../utils/constants/members";
import Typography from "../common/Typography";

import NewMember from "./NewMember";
import TeamMember from "./TeamMember";

const MembersContainer = styled.div`
  display: grid;
  justify-content: center;
  flex-wrap: wrap;
  row-gap: 40px;
  column-gap: 24px;
  grid-template: auto / 1fr 1fr;
  @media (min-width: ${({ theme }) => theme.breakpoints.m}) {
    grid-template: auto / 1fr 1fr 1fr;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.l}) {
    grid-template: auto / 1fr 1fr 1fr 1fr;
  }
`;

const StyledTitle = styled(Typography)`
  font-weight: 800;
  line-height: 29px;
`;

const Team = () => {
  return (
    <div>
      <StyledTitle size="lg" margin="0 0 24px 0">
        Meet our team
      </StyledTitle>
      <MembersContainer>
        {members.map((m) => (
          <TeamMember
            key={m.name}
            imageSrc={m.img}
            fullName={m.name}
            jobPosition={m.role}
            linkedinUrl={m.linkedin}
          />
        ))}
        <NewMember />
      </MembersContainer>
    </div>
  );
};

export default Team;