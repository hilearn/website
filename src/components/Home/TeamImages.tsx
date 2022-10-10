import { useRouter } from "next/router";
import styled from "styled-components";
import { homePageBlocksSpacing } from "../../sharedStyles";
import members, { Member } from "../../utils/constants/members";
import PagePaths from "../../utils/constants/pagePaths";
import BlockTitle from "../common/BlockTitle";
import Button from "../common/Button";
import RoundedImage from "../common/RoundedImage";
import Typography from "../common/Typography";

const getMembersArray = (members: Member[]) => {
  const section1 = members.slice(0, 4);
  const section2 = members.slice(4, 9);
  const section3 = members.slice(10, 14);
  return [section1, section2, section3];
};

interface SectionProps {
  withRightLeftSpaces?: boolean; 
}

const Container = styled.div`
  ${homePageBlocksSpacing}
  display: flex;
  flex-direction: row-reverse;
  @media (max-width: ${({ theme }) => theme.breakpoints.l}) {
    flex-direction: column;
  }
`;

const Content = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  @media (max-width: ${({ theme }) => theme.breakpoints.l}) {
    width: auto;
  }
`;

const ImagesContainer = styled.div`
  display: grid;
  justify-content: center;
  grid-gap: 32px;
  margin-top: 0;
  margin-right: 40px;
  @media (max-width: ${({ theme }) => theme.breakpoints.l}) {
    margin-right: 0;
    margin-top: 48px;
    grid-gap: 32px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    grid-gap: 24px;
  }
`;

const Section = styled.div<SectionProps>`
  display: flex;
  justify-content: center;
  grid-gap: 24px;
  ${({ withRightLeftSpaces }) => withRightLeftSpaces && `
    margin: 0 60px;
  `}
`;

const StyledTypography = styled(Typography)`
  font-weight: 400;
  line-height: 21px;
  margin-bottom: 32px;
`;

const TeamImages = () => {
  const router = useRouter();

  const handleGoToTeam = () => {
    router.push(PagePaths.team);

  };

  return (
    <Container>
      <Content>
        <BlockTitle text="The team" />
        <StyledTypography>
          We have one of the most innovative and highly-skilled teams in Armenia. Many of them are with international achievements at olympiads.
          The team consists of Data scientists, Backend and Frontend developers, Product and Project Managers and Product Designers.
          We work according to Agile methodology. Team tech stack includes: React JS, Webpack, Typescript, Nodejs, AWS.
        </StyledTypography>
        <Button onClick={handleGoToTeam}>
          Meet the team
        </Button>
      </Content>
      <ImagesContainer>
        {getMembersArray(members).map((section, i) => (
          <Section key={i} withRightLeftSpaces={i === 0 || i === 2}>
            {section.map((m) => (
              <RoundedImage key={m.name} src={m.img} />
            ))}
          </Section>
        ))}
      </ImagesContainer>
    </Container>
  );
};

export default TeamImages;
