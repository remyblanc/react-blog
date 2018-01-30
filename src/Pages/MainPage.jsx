import React from 'react';
import styled from 'styled-components';

import {theme, gradient, fontSize} from '../lib/theme';

//Components
import AnimatedRouter from '../Components/AnimatedRouter/AnimatedRouter';

class BasicMainPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AnimatedRouter>
        <div className={this.props.className}>
          123
        </div>
      </AnimatedRouter>
    );
  }
}

const MainPage = styled(BasicMainPage)`
  
`;

export default MainPage;