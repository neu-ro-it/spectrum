// @flow
import * as React from 'react';
import {
  Footer,
  FooterGrid,
  Masthead,
  Support,
  Apps,
  Safety,
  SocialLinks,
} from '../style';
import { Link } from 'react-router-dom';
import { IconButton } from 'src/components/buttons';
import { Logo } from 'src/components/logo';
import { track, events } from 'src/helpers/analytics';

export default () => {
  return (
    <Footer>
      <FooterGrid>
        <Masthead>
          <Link to="/">
            <Logo />
          </Link>
          <p>Hub for developers, designers, growth hackers, one word makers</p>
          <p>© Copyright 2019 Vanila.io</p>
          <SocialLinks>
            <a
              href="https://github.com/withspectrum"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton glyph="github" hoverColor={'text.reverse'} />
            </a>
            <a
              href="https://twitter.com/withspectrum"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton glyph="twitter" hoverColor={'text.reverse'} />
            </a>
          </SocialLinks>
        </Masthead>
        <Apps>
          <span>Apps</span>
          <Link to={`/apps`}>Mac</Link>
        </Apps>
        <Support>
          <span>Support</span>
          <Link to={`/spectrum`}>Community</Link>
          <Link to={`/spectrum/hugs-n-bugs`}>Bug reports</Link>
          <Link to={`/spectrum/feature-requests`}>Feature requests</Link>
          <a href="mailto:community@vanila.io">Email support</a>
        </Support>
        <Safety>
          <span>Safety</span>
          <a
            href="https://github.com/withspectrum/code-of-conduct"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              track(events.CODE_OF_CONDUCT_CLICKED, {
                location: 'splash page footer',
              })
            }
          >
            Code of Conduct
          </a>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
        </Safety>
      </FooterGrid>
    </Footer>
  );
};
