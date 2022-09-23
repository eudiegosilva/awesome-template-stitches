import Head from 'next/head';

import { Sphere, Header } from 'components';

import * as s from './home.layout.styles';

const HomeLayout = () => {
  return (
    <s.Container>
      <Head>
        <title>Stitches Template — NextJS</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <s.Wrapper>
        <Header />
        <s.Section>
          <s.Title>
            Awesome <s.Strong css={{ color: '$primary-11' }}>Stitches</s.Strong>{' '}
            Template for{' '}
            <s.Strong css={{ color: '$quaternary-11' }}>NextJS</s.Strong>{' '}
            projects.
          </s.Title>
          <s.Description>
            Made with NextJS, TypeScript, Stitches and Design Tokens.
          </s.Description>
        </s.Section>
        <Sphere size={320} top={120} left={-120} color="$secondary-03" />
        <Sphere size={420} bottom={120} right={-120} color="$primary-03" />
      </s.Wrapper>
    </s.Container>
  );
};

export { HomeLayout };
