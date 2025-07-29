export const colors = {
  // Primary Color from Design System
  primary: {
    primary: '#FA851E',
    light: '#FFA554',
    pale: '#FFF6EE',
  },
  
  // Black & White from Design System - Updated from Figma
  default: '#181818', // Black & white/Default
  white: '#ffffff', // White
  
  // Status Colors from Design System
  status: {
    red: '#E53939',
  },
  
  // Gray Scale from Design System - Updated from Figma
  gray: {
    100: '#F8F8F8',
    200: '#e8e8e8', // Gray/Gray-200
    300: '#d1d1d1', // Gray/Gray-300
    400: '#bababa', // Gray/Gray-400
    500: '#A3A3A3',
    600: '#8b8b8b', // Gray/Gray600
    700: '#747474',
    800: '#464646', // Gray/Gray-800
    900: '#2f2f2f', // Gray/Gray-900, Gray/Gray900
  },
  
  // Icon Colors from Design System - Updated from Figma
  icon: {
    gray: '#33363d', // color/icon/gray
    inverse: '#ffffff', // color/icon/inverse
  },
  
  // Semantic Line Colors from Design System
  line: {
    normal: '#70737C',
    normalWithOpacity: '#70737C38',
  },
  
  // Background tokens (derived from design system)
  background: {
    default: '#ffffff', // Updated to match White token
    disabled: '#e8e8e8', // Updated to match Gray-200
    elevated: '#ffffff',
    light: '#F8F8F8',
    pale: '#FFF6EE',
  },
  
  // Text tokens (derived from design system)
  text: {
    primary: '#181818', // Updated to match Black & white/Default
    secondary: '#464646', // Updated to match Gray-800
    tertiary: '#747474',
    placeholder: '#8b8b8b', // Updated to match Gray600
    disabled: '#bababa', // Updated to match Gray-400
    inverse: '#ffffff', // Updated to match White
    line: '#70737C',
  },
  
  // Border tokens (derived from design system)
  border: {
    default: '#d1d1d1', // Updated to match Gray-300
    light: '#e8e8e8', // Updated to match Gray-200
    normal: '#70737C',
  },
} as const;

export type ColorTokens = typeof colors;