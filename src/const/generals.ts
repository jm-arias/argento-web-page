type anchor = {
  [key: string]: { text: string };
};

export const anchorMenu: anchor = {
  aboutUs: { text: "¿Quiénes somos?" },
  products: {
    text: "Productos",
  },
  contact: {
    text: "Contácto",
  },
} as const;

export type AnchorMenuEnumKeys = keyof typeof anchorMenu;

export type Products = "bancaseguros" | "subagentes" | "puntos-de-pago";

export type identityColor = "blue" | "orange" | "purple";
