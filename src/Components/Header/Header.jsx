import React from 'react';
import styled from 'styled-components';

import {theme, gradient, fontSize, flexContainer, wrapper} from '../../lib/theme';

//Components
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import ChangeLang from "../ChangeLang/ChangeLang";

const BasicHeader = (props) => {
  return (
    <div className={props.className}>
      <Logo
        blogTitle="Borisov.space"
        blogDescription="Блог о жизни, IT, играх и автомобилях"
      />
      <div>
        <Navigation/>
        <ChangeLang/>
        search
      </div>
    </div>
  );
};

const Header = styled(BasicHeader)`
  ${flexContainer('space-between','center','center')}
  ${wrapper('pc')}
  padding: 20px 0;
`;

export default Header;