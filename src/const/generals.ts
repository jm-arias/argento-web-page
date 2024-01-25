export const anchorMenu = {
  aboutUs: { 
    text: "NOSTROS",
    anchor: "aboutUs" },
  products: {
    text: "PRODUCTOS",
    anchor: "productInfo"
  },
  contact: {
    text: "CONTÁCTO",
    anchor: "contact"
  },
} as const;

export type AnchorMenuEnumKeys = keyof typeof anchorMenu;

export type Products = "bancaseguros" | "subagentes" | "puntos-de-pago";

export type identityColor = "blue" | "orange" | "purple";
