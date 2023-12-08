import { useState } from "react";
import { images } from "assets";
import siteContent from "const/siteContent";
import ProductFeatureItem from "components/ProductFeatureItem";
import ContentContainer from "components/frames/ContentContainer";
import Heading from "components/ui/Heading";
import { Products, anchorMenu, identityColor } from "const/generals";

export default function ProductsInfo() {
  const [product, setProduct] = useState<Products>("bancaseguros");

  const getProductTheme = (): identityColor => {
    switch (product) {
      case "bancaseguros":
        return "blue";
      case "subagentes":
        return "orange";
      case "puntos-de-pago":
        return "purple";
    }
  };

  const isActive = (p: Products) =>
    p === product
      ? `border-b-(solid 1) border-${getProductTheme()}-primary`
      : "saturate-0";

  return (
    <div
      id={anchorMenu.products.anchor}
      className="py-25 bg-cover grid place-content-center overflow-hidden bg-gradient-to-t from-gray-200 to-white relative"
    >
      <ContentContainer className="relative z-1">
        <div className="grid gap-12 lg:gap-15 ">
          <div className="grid gap-5 text-center">
            <Heading className={`text-${getProductTheme()}-primary`}>
              {siteContent.products.title}
            </Heading>
            <div className="grid grid-cols-3 gap-5vw lg:gap-20 mx-2vh lg:mx-30 md:mx-15vh py-2vw lg:py-5">
              <img
                src={images.ArgentoSubagentes}
                className={["w-full", "py-4", isActive("subagentes")].join(" ")}
                onClick={() => setProduct("subagentes")}
              />
              <img
                src={images.ArgentoBancaseguros}
                className={["w-full", "py-4", isActive("bancaseguros")].join(
                  " "
                )}
                onClick={() => setProduct("bancaseguros")}
              />
              <img
                src={images.ArgentoPuntosDePago}
                className={["w-full", "py-4", isActive("puntos-de-pago")].join(
                  " "
                )}
                onClick={() => setProduct("puntos-de-pago")}
              />
            </div>
            <div className="font-300">
              <span>{siteContent.products[product].contentP1}</span>
              <span className="hidden sm:inline">
                {siteContent.products[product].contentP2}
              </span>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 md:items-center gap-12">
            <div
              style={{
                backgroundImage: siteContent.products[product].sectionImage,
              }}
              className="aspect-[4/2] w-full h-full overflow-hidden rounded-xl bg-cover bg-right-center drop-shadow-md"
            />
            <div className="grid gap-8 grid-cols-none sm:grid-cols-2 lg:grid-cols-none">
              {siteContent.products[product].features?.map((_) => (
                <ProductFeatureItem
                  icon={_.icon}
                  title={_.title}
                  content={_.content}
                  theme={getProductTheme()}
                  key={_.title}
                />
              ))}
            </div>
          </div>
          {siteContent.products[product]?.footer && (
            <div className="flex flex-wrap justify-center gap-5">
              <hr
                className={[
                  "border-0",
                  "h-[1px]",
                  `bg-${getProductTheme()}-accent`,
                  "w-full",
                  "m-0",
                ].join(" ")}
              />
              <div
                className={[
                  "text-(center lg)",
                  "w-full",
                  `text-${getProductTheme()}-primary`,
                ].join(" ")}
              >
                {siteContent.products[product]?.footer?.content}
              </div>
              <div className="w-full flex flex-wrap gap-2 w-[80%] lg:w-[60%] justify-center">
                {siteContent.products[product]?.footer?.products.map((_) => (
                  <span
                    className={[
                      "text-(white sm)",
                      `bg-${getProductTheme()}-primary`,
                      "px-2.5",
                      "py-0.5",
                      "rounded-md",
                    ].join(" ")}
                    key={_}
                  >
                    {_}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </ContentContainer>
      <div className="absolute w-full h-full blur-sm drop-shadow-lg opacity-8 lg:opacity-30">
        <img
          src={images.SilverRing}
          className="absolute w-200 -left-100 top-20% "
        />
        <img
          src={images.SilverRing}
          className="absolute w-150 -right-75 -top-75 "
        />
        <img
          src={images.SilverRing}
          className="absolute w-100 -right-30 -bottom-50 "
        />
      </div>
    </div>
  );
}
