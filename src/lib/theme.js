export const theme = {
  colors: {
    white: '#ffffff',
    red: '#ff000a',
    green: '#00ff00'
  },
  fonts: {
    CirceLight: `
      font-family: Circe;
      font-weight: 300;
    `,
    CirceRegular: `
      font-family: Circe;
      font-weight: 400;
    `,
    CirceBold: `
      font-family: Circe;
      font-weight: 600;
    `,
    CirceExtraBold: `
      font-family: Circe;
      font-weight: 800;
    `,
  },
  paddings: {
  },
  wrappers: {
    pc: '1300px',
    notebook: '1170px',
    macbook: '970px',
    tablet: '720px',
    mobile: '300px'
  }
};

theme.layout = {
  pc: {
    respondTo: `(min-width: 1370px)`,
  },
  notebook: {
    respondTo: `(max-width: 1368px)`,
  },
  macbook: {
    respondTo: `(max-width: 1280px)`,
  },
  tablet: {
    respondTo: `(max-width: 1024px)`,
  },
  mobile: {
    respondTo: `(max-width: 760px)`,
  },

};


export const fontSize = (fontSize, lineHeight) => (`
  font-size: ${fontSize}px;
  line-height: ${lineHeight ? `${lineHeight}px` : '1.1'};
`);

export const flexContainer = (justifyContent, alignItems, alignContent) => (`
  display: flex;
  justify-content: ${justifyContent};
  align-items: ${alignItems};
  align-content: ${alignContent};
`
);

export const wrapper = (type) => (`
  width: ${theme.wrappers[type]};
  margin: auto;
`);

export const gradient = (gradType, gradDirection, gradStart, gradEnd) => (`
  background: ${gradType}-gradient(${gradType === 'linear' ? gradDirection+',' : ''} ${gradStart}, ${gradEnd});
`);

export const respondTo = (size, style) => `@media only screen and ${theme.layout[size].respondTo} {
  ${style}
}`;

export const pc = style => respondTo('pc', style);
export const notebook = style => respondTo('notebook', style);
export const macbook = style => respondTo('macbook', style);
export const tablet = style => respondTo('tablet', style);
export const mobile = style => respondTo('mobile', style);

theme.wrapper = wrapper;
theme.respondTo = respondTo;
theme.fontSize = fontSize;
theme.flexContainer = flexContainer;
theme.gradient = gradient;

export default theme;
