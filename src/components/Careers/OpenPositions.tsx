import styled from "styled-components";

import HugeButtonPanel from "../common/HugeButtonPanel";
import ListWithLabel from "../common/ListWithLabel";
import settings from '../../../public/images/settings.svg';
import Typography from "../common/Typography";

const Paragraph = styled(Typography)`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`;

const ColouredSpan = styled(Paragraph)`
  color: ${({ theme }) => theme.colors.primary};
`;

const OpenPositions = () => {
  return (
    <>
      <HugeButtonPanel
        iconSrc={settings}
        title="Front-end engineer"
        caption="Lead"
        additional="Yerevan, Armenia"
        withBottomGutter
      >
        <div>
          <Paragraph>
            We are expanding our team of Senior Front-End Developers to work on a familty of fiancial advise
            products housed under the Aqqru brand and powered by Wealthtech&apos;s state of the art fGPS™ API.
          </Paragraph>
          <ListWithLabel
            label="As a Front-End Engineer you will:"
            list={[
              'Understand the business needs and code them',
              'Add new features to the algorithm, e.g. consider taking a loan to buy a car'
            ]}
          />
          <ListWithLabel
            label="The technology stack is:"
            list={[
              'React + Redux',
              'webpack'
            ]}
          />
          <ListWithLabel
            label="The following skills will be a plus:"
            list={[
              'Very good coding skills with JS/CSS (5+ years of front-end developement)',
              'Knowledge of version control software such as Git',
              'Understanding of development workflows',
              'Desire to learn and grow',
              'Knowledge of English to communicate with team members abroad'
            ]}
          />
          <Paragraph>
            For application please send your cv to
            {' '}
            <ColouredSpan as="span">
              jobs@hilearn.io
            </ColouredSpan>
          </Paragraph>
          <Paragraph>
            Feel free to get acquainted with our interviewing style
            {' '}
            <ColouredSpan as="span">
              interviewing style
            </ColouredSpan>
          </Paragraph>
        </div>
      </HugeButtonPanel>
      <HugeButtonPanel
        iconSrc={settings}
        title="Front-end engineer"
        caption="Lead"
        additional="Yerevan, Armenia"
        withBottomGutter
      >
        <div>
          <Paragraph>
            We are expanding our team of Senior Front-End Developers to work on a familty of fiancial advise
            products housed under the Aqqru brand and powered by Wealthtech&apos;s state of the art fGPS™ API.
          </Paragraph>
          <ListWithLabel
            label="As a Front-End Engineer you will:"
            list={[
              'Understand the business needs and code them',
              'Add new features to the algorithm, e.g. consider taking a loan to buy a car'
            ]}
          />
          <ListWithLabel
            label="The technology stack is:"
            list={[
              'React + Redux',
              'webpack'
            ]}
          />
          <ListWithLabel
            label="The following skills will be a plus:"
            list={[
              'Very good coding skills with JS/CSS (5+ years of front-end developement)',
              'Knowledge of version control software such as Git',
              'Understanding of development workflows',
              'Desire to learn and grow',
              'Knowledge of English to communicate with team members abroad'
            ]}
          />
          <Paragraph>
            For application please send your cv to
            {' '}
            <ColouredSpan as="span">
              jobs@hilearn.io
            </ColouredSpan>
          </Paragraph>
          <Paragraph>
            Feel free to get acquainted with our interviewing style
            {' '}
            <ColouredSpan as="span">
              interviewing style
            </ColouredSpan>
          </Paragraph>
        </div>
      </HugeButtonPanel>
      <HugeButtonPanel
        iconSrc={settings}
        title="Front-end engineer"
        caption="Lead"
        additional="Yerevan, Armenia"
        withBottomGutter
      >
        <div>
          <Paragraph>
            We are expanding our team of Senior Front-End Developers to work on a familty of fiancial advise
            products housed under the Aqqru brand and powered by Wealthtech&apos;s state of the art fGPS™ API.
          </Paragraph>
          <ListWithLabel
            label="As a Front-End Engineer you will:"
            list={[
              'Understand the business needs and code them',
              'Add new features to the algorithm, e.g. consider taking a loan to buy a car'
            ]}
          />
          <ListWithLabel
            label="The technology stack is:"
            list={[
              'React + Redux',
              'webpack'
            ]}
          />
          <ListWithLabel
            label="The following skills will be a plus:"
            list={[
              'Very good coding skills with JS/CSS (5+ years of front-end developement)',
              'Knowledge of version control software such as Git',
              'Understanding of development workflows',
              'Desire to learn and grow',
              'Knowledge of English to communicate with team members abroad'
            ]}
          />
          <Paragraph>
            For application please send your cv to
            {' '}
            <ColouredSpan as="span">
              jobs@hilearn.io
            </ColouredSpan>
          </Paragraph>
          <Paragraph>
            Feel free to get acquainted with our interviewing style
            {' '}
            <ColouredSpan as="span">
              interviewing style
            </ColouredSpan>
          </Paragraph>
        </div>
      </HugeButtonPanel>
      <HugeButtonPanel
        iconSrc={settings}
        title="Front-end engineer"
        caption="Lead"
        additional="Yerevan, Armenia"
        withBottomGutter
      >
        <div>
          <Paragraph>
            We are expanding our team of Senior Front-End Developers to work on a familty of fiancial advise
            products housed under the Aqqru brand and powered by Wealthtech&apos;s state of the art fGPS™ API.
          </Paragraph>
          <ListWithLabel
            label="As a Front-End Engineer you will:"
            list={[
              'Understand the business needs and code them',
              'Add new features to the algorithm, e.g. consider taking a loan to buy a car'
            ]}
          />
          <ListWithLabel
            label="The technology stack is:"
            list={[
              'React + Redux',
              'webpack'
            ]}
          />
          <ListWithLabel
            label="The following skills will be a plus:"
            list={[
              'Very good coding skills with JS/CSS (5+ years of front-end developement)',
              'Knowledge of version control software such as Git',
              'Understanding of development workflows',
              'Desire to learn and grow',
              'Knowledge of English to communicate with team members abroad'
            ]}
          />
          <Paragraph>
            For application please send your cv to
            {' '}
            <ColouredSpan as="span">
              jobs@hilearn.io
            </ColouredSpan>
          </Paragraph>
          <Paragraph>
            Feel free to get acquainted with our interviewing style
            {' '}
            <ColouredSpan as="span">
              interviewing style
            </ColouredSpan>
          </Paragraph>
        </div>
      </HugeButtonPanel>
    </>
  );
};

export default OpenPositions;
