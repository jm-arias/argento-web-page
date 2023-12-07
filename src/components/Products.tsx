import { CSSProperties } from "react";
import { images } from "assets";
import siteContent from "const/siteContent";
import ProductFeatureItem from "components/ProductFeatureItem";
import ContentContainer from "components/frames/ContentContainer";
import Heading from "components/ui/Heading";

const style: Record<string, CSSProperties> = {
  img: {
    backgroundImage: `url('${images.HandsomeYoungBusinessManWorkingWithComputerOffice}')`,
  },
} as const;

export default function Products() {
  return (
    <div className="py-25 bg-cover grid place-content-center overflow-hidden bg-gradient-to-t from-gray-200 to-white relative">
      <ContentContainer className="relative z-1">
        <div className="grid gap-12 lg:gap-15 ">
          <div className="grid gap-5 text-center">
            <Heading className="text-blue-primary">
              {siteContent.products.title}
            </Heading>
            <div className="font-300">
              <span>{siteContent.products.bancaseguros.description1}</span>
              <span className="hidden sm:inline">
                {siteContent.products.bancaseguros.description2}
              </span>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 md:items-center gap-12">
            <div
              style={style.img}
              className="aspect-[4/2] w-full h-full overflow-hidden rounded-xl bg-cover bg-right-center drop-shadow-md"
            />
            <div className="grid gap-8 grid-cols-none sm:grid-cols-2 lg:grid-cols-none">
              {siteContent.products.bancaseguros.features.map((_) => (
                <ProductFeatureItem
                  icon={_.icon}
                  title={_.title}
                  content={_.content}
                  key={_.title}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-5">
            <hr className="border-0 h-[1px] bg-blue-primary w-full m-0" />
            <div className="text-(center blue-primary lg) w-full">
              {siteContent.products.bancaseguros.footer.content}
            </div>
            <div className="w-full flex flex-wrap gap-2 w-[80%] lg:w-[60%] justify-center">
              {siteContent.products.bancaseguros.footer.products.map((_) => (
                <span
                  className="text-(white sm) bg-blue-primary px-2.5 py-0.5 rounded-md"
                  key={_}
                >
                  {_}
                </span>
              ))}
            </div>
          </div>
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
