// React Theme — extracted from https://www.hoher-darsberg.de/home
// Compatible with: Chakra UI, Stitches, Vanilla Extract, or any CSS-in-JS

/**
 * TypeScript type definition for this theme:
 *
 * interface Theme {
 *   colors: {
    background: string;
    foreground: string;
    neutral50: string;
    neutral100: string;
    neutral200: string;
    neutral300: string;
    neutral400: string;
    neutral500: string;
    neutral600: string;
    neutral700: string;
    neutral800: string;
    neutral900: string;
 *   };
 *   fonts: {
    body: string;
    mono: string;
    heading: string;
 *   };
 *   fontSizes: {
    '15': string;
    '16': string;
    '18': string;
    '36': string;
    '48': string;
    '52': string;
    '94.336': string;
    '52.864': string;
    '26.752': string;
    '19.2': string;
    '19.072': string;
    '16.32': string;
 *   };
 *   space: {
    '1': string;
    '20': string;
    '25': string;
    '38': string;
    '51': string;
    '59': string;
    '64': string;
    '68': string;
    '77': string;
    '128': string;
    '285': string;
    '297': string;
    '334': string;
 *   };
 *   radii: {
    sm: string;
    md: string;
    xl: string;
    full: string;
 *   };
 *   shadows: {
    sm: string;
    xs: string;
    md: string;
    lg: string;
 *   };
 *   states: {
 *     hover: { opacity: number };
 *     focus: { opacity: number };
 *     active: { opacity: number };
 *     disabled: { opacity: number };
 *   };
 * }
 */

export const theme = {
  "colors": {
    "background": "#f7f7f7",
    "foreground": "#000000",
    "neutral50": "#5a5a5a",
    "neutral100": "#000000",
    "neutral200": "#f7f7f7",
    "neutral300": "#e7e7e7",
    "neutral400": "#333333",
    "neutral500": "#4a5464",
    "neutral600": "#bebebe",
    "neutral700": "#dcdcdc",
    "neutral800": "#262626",
    "neutral900": "#1a1a1a"
  },
  "fonts": {
    "body": "'Helvetica', sans-serif",
    "mono": "'monospace', monospace",
    "heading": "'Libre Baskerville', sans-serif"
  },
  "fontSizes": {
    "15": "15px",
    "16": "16px",
    "18": "18px",
    "36": "36px",
    "48": "48px",
    "52": "52px",
    "94.336": "94.336px",
    "52.864": "52.864px",
    "26.752": "26.752px",
    "19.2": "19.2px",
    "19.072": "19.072px",
    "16.32": "16.32px"
  },
  "space": {
    "1": "1px",
    "20": "20px",
    "25": "25px",
    "38": "38px",
    "51": "51px",
    "59": "59px",
    "64": "64px",
    "68": "68px",
    "77": "77px",
    "128": "128px",
    "285": "285px",
    "297": "297px",
    "334": "334px"
  },
  "radii": {
    "sm": "4px",
    "md": "8px",
    "xl": "18px",
    "full": "300px"
  },
  "shadows": {
    "sm": "rgb(0, 0, 0) 0px 0px 0px 0px",
    "xs": "rgba(0, 0, 0, 0.15) 0px 1px 2px 0px",
    "md": "rgba(0, 0, 0, 0.2) 0px 0px 10px 0px",
    "lg": "rgba(121, 121, 121, 0.17) 2px 2px 20px 0px"
  },
  "states": {
    "hover": {
      "opacity": 0.08
    },
    "focus": {
      "opacity": 0.12
    },
    "active": {
      "opacity": 0.16
    },
    "disabled": {
      "opacity": 0.38
    }
  }
};

// MUI v5 theme
export const muiTheme = {
  "palette": {
    "background": {
      "default": "#f7f7f7",
      "paper": "#fafafa"
    },
    "text": {
      "primary": "#000000",
      "secondary": "#5a5a5a"
    }
  },
  "typography": {
    "fontFamily": "'dejanire-sans', sans-serif",
    "h1": {
      "fontSize": "36px",
      "fontWeight": "400",
      "lineHeight": "36px",
      "fontFamily": "'Libre Baskerville', sans-serif"
    },
    "h2": {
      "fontSize": "26.752px",
      "fontWeight": "300",
      "lineHeight": "32.1024px",
      "fontFamily": "'Libre Baskerville', sans-serif"
    }
  },
  "shape": {
    "borderRadius": 8
  },
  "shadows": [
    "rgb(0, 0, 0) 0px 0px 0px 0px",
    "rgba(0, 0, 0, 0.15) 0px 1px 2px 0px",
    "rgba(0, 0, 0, 0.2) 0px 0px 10px 0px",
    "rgba(121, 121, 121, 0.17) 2px 2px 20px 0px"
  ]
};

export default theme;
