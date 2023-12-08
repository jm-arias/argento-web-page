export const anchorMenu = {
  aboutUs: { 
    text: "¿Quiénes somos?",
    anchor: "aboutUs" },
  products: {
    text: "Productos",
    anchor: "productInfo"
  },
  contact: {
    text: "Contácto",
    anchor: "contact"
  },
} as const;

export type AnchorMenuEnumKeys = keyof typeof anchorMenu;

export type Products = "bancaseguros" | "subagentes" | "puntos-de-pago";

export type identityColor = "blue" | "orange" | "purple";
