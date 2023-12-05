type anchor = {
  [key: string]: { text: string };
};

export const anchorMenu: anchor = {
  aboutUs: { text: '¿Quiénes somos?' },
  products: {
    text: 'Productos',
  },
  contact: {
    text: 'Contácto',
  },
} as const;

export type anchorMenuEnumKeys = keyof typeof anchorMenu;
