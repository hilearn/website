import styled from "styled-components";
import members, { Member } from "../../utils/constants/members";
import BlockTitle from "../common/BlockTitle";
import Button from "../common/Button";
import RoundedImage from "../common/RoundedImage";
import Typography from "../common/Typography";

const getMembersArray = (members: Member[]) => {
  const section1 = members.slice(0, 4);
  const section2 = members.slice(4, 9);
  const section3 = members.slice(10, 14);
  return [section1, section2, section3];
}

const ImagesContainer = styled.div`
  display: grid;
  justify-content: center;
  grid-gap: 32px;
  margin-top: 48px;
`;

const Section = styled.div`
  display: flex;
  justify-content: center;
  grid-gap: 24px;
`;

const StyledTypography = styled(Typography)`
  font-size: 16px;
  font-weight: 400;
  line-height: 21px;
  margin-bottom: 32px;
`;

const Team = () => {
  return (
    <>
      <BlockTitle text="The team" />
      <StyledTypography>
        We have one of the most innovative and highly-skilled teams in Armenia. Many of them are with international achievements at olympiads.
        The team consists of Data scientists, Backend and Frontend developers, Product and Project Managers and Product Designers.
        We work according to Agile methodology. Team tech stack includes: React JS, Webpack, Typescript, Nodejs, AWS.
      </StyledTypography>
      <Button>
        Meet the team
      </Button>
      <ImagesContainer>
        {getMembersArray(members).map((section, i) => (
          <Section key={i}>
            {section.map((m) => (
              <RoundedImage key={m.name} src={m.img} />
            ))}
          </Section>
        ))}
      </ImagesContainer>
    </>
  );
};

export default Team;