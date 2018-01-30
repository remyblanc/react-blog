import React from 'react';
import styled from 'styled-components';

import {theme, gradient, fontSize, flexContainer, wrapper} from '../../lib/theme';

const BasicLogo = (props) => {
  return (
    <div className={props.className}>
      <b>{props.blogTitle}</b>
      <span>{props.blogDescription}</span>
    </div>
  );
};

const Logo = styled(BasicLogo)`
  b {
    display: block;
    text-transform: uppercase;
    ${theme.fonts.CirceExtraBold}
    ${fontSize(32,40)}
  }
`;

export default Logo;