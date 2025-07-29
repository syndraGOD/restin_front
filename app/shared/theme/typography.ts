export const typography = {
  // Title styles from Design System - Updated from Figma
  title: {
    title1: {
      bold: {
        fontFamily: "Pretendard", // Title1/Bold
        fontWeight: 700,
        fontSize: "40px",
        lineHeight: 1.399999976158142, // Updated to match Figma token
      },
      medium: {
        fontFamily: "Pretendard",
        fontWeight: 500,
        fontSize: "40px",
        lineHeight: 1.4,
      },
      regular: {
        fontFamily: "Pretendard",
        fontWeight: 400,
        fontSize: "40px",
        lineHeight: 1.4,
      },
    },
    title2: {
      bold: {
        fontFamily: "Pretendard",
        fontWeight: 700,
        fontSize: "36px",
        lineHeight: 1.4,
      },
      medium: {
        fontFamily: "Pretendard",
        fontWeight: 500,
        fontSize: "36px",
        lineHeight: 1.4,
      },
      regular: {
        fontFamily: "Pretendard",
        fontWeight: 400,
        fontSize: "36px",
        lineHeight: 1.4,
      },
    },
    title3: {
      bold: {
        fontFamily: "Pretendard",
        fontWeight: 700,
        fontSize: "32px",
        lineHeight: 1.4,
      },
      medium: {
        fontFamily: "Pretendard",
        fontWeight: 500,
        fontSize: "32px",
        lineHeight: 1.4,
      },
    },
  },
  
  // Header styles from Design System
  header: {
    header1: {
      bold: {
        fontFamily: "Pretendard",
        fontWeight: 700,
        fontSize: "28px",
        lineHeight: 1.4,
      },
      medium: {
        fontFamily: "Pretendard",
        fontWeight: 500,
        fontSize: "28px",
        lineHeight: 1.4,
      },
      regular: {
        fontFamily: "Pretendard",
        fontWeight: 400,
        fontSize: "28px",
        lineHeight: 1.4,
      },
    },
    header2: {
      bold: {
        fontFamily: "Pretendard",
        fontWeight: 700,
        fontSize: "24px",
        lineHeight: 1.45,
      },
      medium: {
        fontFamily: "Pretendard",
        fontWeight: 500,
        fontSize: "24px",
        lineHeight: 1.45,
      },
      regular: {
        fontFamily: "Pretendard",
        fontWeight: 400,
        fontSize: "24px",
        lineHeight: 1.45,
      },
    },
    header3: {
      bold: {
        fontFamily: "Pretendard",
        fontWeight: 700,
        fontSize: "20px",
        lineHeight: 1.5,
      },
      medium: {
        fontFamily: "Pretendard",
        fontWeight: 500,
        fontSize: "20px",
        lineHeight: 1.5,
      },
      regular: {
        fontFamily: "Pretendard",
        fontWeight: 400,
        fontSize: "20px",
        lineHeight: 1.5,
      },
    },
    header4: {
      bold: {
        fontFamily: "Pretendard",
        fontWeight: 700,
        fontSize: "18px",
        lineHeight: 1.5,
      },
      regular: {
        fontFamily: "Pretendard",
        fontWeight: 400,
        fontSize: "18px",
        lineHeight: 1.5,
      },
    },
  },
  
  // Body styles from Design System
  body: {
    large: {
      bold: {
        fontFamily: "Pretendard",
        fontWeight: 700,
        fontSize: "16px",
        lineHeight: 1.5,
      },
      medium: {
        fontFamily: "Pretendard",
        fontWeight: 500,
        fontSize: "16px",
        lineHeight: 1.5,
      },
      regular: {
        fontFamily: "Pretendard",
        fontWeight: 400,
        fontSize: "16px",
        lineHeight: 1.5,
      },
    },
    medium: {
      bold: {
        fontFamily: "Pretendard",
        fontWeight: 700,
        fontSize: "14px",
        lineHeight: 1.5,
      },
      medium: {
        fontFamily: "Pretendard",
        fontWeight: 500,
        fontSize: "14px",
        lineHeight: 1.5,
      },
      regular: {
        fontFamily: "Pretendard",
        fontWeight: 400,
        fontSize: "14px",
        lineHeight: 1.5,
      },
    },
    small: {
      bold: {
        fontFamily: "Pretendard",
        fontWeight: 700,
        fontSize: "12px",
        lineHeight: 1.4,
      },
      medium: {
        fontFamily: "Pretendard",
        fontWeight: 500,
        fontSize: "12px",
        lineHeight: 1.5,
      },
      regular: {
        fontFamily: "Pretendard",
        fontWeight: 400,
        fontSize: "12px",
        lineHeight: 1.5,
      },
    },
  },
  
  // Legacy support for existing components
  special: {
    headerTitle: {
      fontFamily: "Noto Sans",
      fontWeight: 700,
      fontSize: "16px", 
      lineHeight: 0,
      letterSpacing: "-0.32px",
    },
  },
} as const;

export type TypographyTokens = typeof typography;