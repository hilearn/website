import styled from "styled-components";

import members from "../../utils/constants/members";
import Typography from "../common/Typography";

import NewMember from "./NewMember";
import TeamMember from "./TeamMember";

const MembersContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  row-gap: 40px;
  column-gap: 24px;
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
          />
        ))}
        <NewMember />
      </MembersContainer>
    </div>
  );
};

export default Team;