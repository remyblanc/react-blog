import React from 'react';
import styled from 'styled-components';

import {theme, gradient, fontSize, flexContainer, wrapper} from '../../lib/theme';

//Components
import ArticleBlock from "../ArticleBlock/ArticleBlock";

const ArticlesList = (props) => {
  return (
    <div className={props.className}>
      <ArticleBlock/>
    </div>
  );
};

export default ArticlesList;