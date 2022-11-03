import { useRouter } from "next/router";
import { Fragment } from "react";
import styled from "styled-components";

import { homePageBlocksSpacing } from "../../sharedStyles";
import members, { getMembersImage, Member } from "../../utils/constants/members";
import PagePaths from "../../utils/constants/pagePaths";
import BlockTitle, { BlockSubtitle } from "../common/BlockTypography";
import Button from "../common/Button";
import RoundedImage from "../common/RoundedImage";

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
  display: grid;
  justify-content: center;
  grid-template: 1fr / repeat(5, 1fr);
  grid-gap: 24px;
  margin: 0 auto;
  ${({ withRightLeftSpaces }) => withRightLeftSpaces && `
    grid-template: 1fr / 1fr repeat(4, 2fr) 1fr;
  `}
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  @media (max-width: ${({ theme }) => theme.breakpoints.withImageBlock}) {
    justify-content: center;
  }
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
        <BlockSubtitle margin="0 0 32px 0">
          We have one of the most innovative and highly-skilled
          teams in Armenia. Many of them are with international
          achievements at olympiads. The team consists of AI/ML
          engineers, Data scientists, Backend and Frontend developers,
          Product and Project Managers and Product Designers. We work
          according to Agile methodology.
        </BlockSubtitle>
        <ButtonContainer>
          <Button onClick={handleGoToTeam}>
            Meet the team
          </Button>
        </ButtonContainer>
      </Content>
      <ImagesContainer>
        {getMembersArray(members).map((section, i) => (
          <Section key={i} withRightLeftSpaces={i === 0 || i === 2}>
            {section.map((m, ii) => {
              if ((i === 0 || i === 2) && ii === 0) {
                return (
                  <Fragment key={m.name}>
                    <span />
                    <RoundedImage src={getMembersImage(m)} alt={m.name} />
                  </Fragment>
                );
              } else if ((i === 0 || i === 2) && ii === section.length - 1) {
                return (
                  <Fragment key={m.name}>
                    <RoundedImage src={getMembersImage(m)} alt={m.name} />
                    <span />
                  </Fragment>
                );
              }
               else {
                return (
                  <RoundedImage key={m.name} src={getMembersImage(m)} alt={m.name} />
                );
              }
          })}
          </Section>
        ))}
      </ImagesContainer>
    </Container>
  );
};

export default TeamImages;
