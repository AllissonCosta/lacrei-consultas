const palette = {
  lacreiPrimaryGreen: '#008479', // usado no botão e logo
  lacreiSecondaryGreen: '#006B5F', // Tonalidade para hover
  
  // Neutras
  white: '#FFFFFF',
  grayLight: '#F7F7F7', // Fundo de página ou divisórias leves
  grayMedium: '#64748B', // Cinza para texto secundário (descrições, textos legais)
  black: '#1E293B', // Cinza escuro para texto primário
  linkHover: '#F0F0F0', // Fundo de hover claro dos links do header
  
  // Cor base do gradiente do Header
  headerGradientStart: 'rgb(245, 255, 251)', 
};

// Slots de Uso
export const theme = {
  colors: {
    // Fundo
    backgroundPage: palette.grayLight,
    backgroundCard: palette.white, // Usado para cards e fundos de container
    
    // Gradiente do Header
    headerGradientStart: palette.headerGradientStart,

    // CORES NEUTRAS COMO SLOTS
    grayLight: palette.grayLight, // 👈 ADICIONADO PARA USO EM BORDAS/DIVISÓRIAS

    // Texto
    textPrimary: palette.black,
    textSecondary: palette.grayMedium, 
    textInvert: palette.white,

    // Botões e Interação
    buttonPrimaryBackground: palette.lacreiPrimaryGreen,
    buttonPrimaryText: palette.white,
    buttonPrimaryHover: palette.lacreiSecondaryGreen,

    // Header & Footer
    // OBS: O Header usa gradiente, mas o logo/links usam as cores do texto primário/logoPrimary.
    headerBackground: palette.white, 
    headerText: palette.black,
    
    // FOOTER
    footerBackground: palette.white,
    footerText: palette.black, 
    
    // SLOTS QUE RESOLVEM O ERRO DE TIPAGEM NO HEADER
    logoPrimary: palette.lacreiPrimaryGreen,    
    linkHoverBackground: palette.linkHover, 
    
    // Slot para a cor dos links internos no Footer
    textAnchor: palette.black, 

    cardBackground: '#F5F3FA',
  },
  
  // Tipografia
  typography: {
    fontFamily: 'Roboto, sans-serif',
    sizeBase: '16px',
    sizeLarge: '2rem',
  },

  // Breakpoints (Mobile-first)
  breakpoints: {
    mobile: '576px',
    tablet: '768px',
    desktop: '1024px',
  },
};

export type Theme = typeof theme;