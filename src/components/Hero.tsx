import siteContent from "const/siteContent";
import ContentContainer from "components/frames/ContentContainer";
import { images } from "assets/index";
import Heading from "components/ui/Heading";

export default function HeaderNav() {
  return (
    <div className="heroContainer grid place-content-center bg-cover bg-fixed bg-top-left -mb-[12vw] md:-mb-[15vw]
    xl:-mb-[13em]">
      <ContentContainer>
        <div className="grid grid-cols-1 my-30 md:grid-cols-2 md:my-20 md:gap-10">
          <div className="flex items-center">
            <div className="px-5 text-center md:px-0 md:text-left grid gap-1">
              <Heading className="w-full from-blue-secondary via-blue-primary to-blue-accent bg-gradient-to-r bg-clip-text pt-5 text-transparent">
                {siteContent.hero.title}
              </Heading>
              <p className="hidden lg-inline">{siteContent.hero.content}</p>
            </div>
          </div>
          <div className="relative items-center justify-center overflow-visible hidden md:flex z-1">
            <div className="graph-filters absolute aspect-square w-full object-contain backdrop-blur-md"></div>
            <img
              className="graph aspect-square w-full object-contain"
              src={images.AddedValueGraph}
            />
          </div>
        </div>
      </ContentContainer>
    </div>
  );
}
