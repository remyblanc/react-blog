import React from 'react';
import styled from 'styled-components';

import {theme, gradient, fontSize, flexContainer, wrapper} from '../lib/theme';

//Components
import AnimatedRouter from '../Components/AnimatedRouter/AnimatedRouter';
import Header from '../Components/Header/Header';
import ArticlesList from "../Components/ArticlesList/ArticlesList";
import WidgetPopularPosts from "../Components/WidgetPopularPosts/WidgetPopularPosts";
import WidgetTags from "../Components/WidgetTags/WidgetTags";
import WidgetSubscribe from "../Components/WidgetSubscribe/WidgetSubscribe";

import LayoutMainSide from "../Components/LayoutMainSide/LayoutMainSide";
import LayoutLeftSide from "../Components/LayoutLeftSide/LayoutLeftSide";

class BasicMainPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AnimatedRouter>
        <div className={this.props.className}>
          <Header/>

          <div className="flex">
            <LayoutMainSide>
              <ArticlesList/>
            </LayoutMainSide>

            <LayoutLeftSide>
              <WidgetPopularPosts/>

              <WidgetTags/>

              <WidgetSubscribe/>
            </LayoutLeftSide>
          </div>

        </div>
      </AnimatedRouter>
    );
  }
}

const MainPage = styled(BasicMainPage)`
  ${wrapper('pc')}
  .flex {
    ${flexContainer('space-between', 'flex-start', 'flex-start')}
  }
`;

export default MainPage;