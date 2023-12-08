import { images } from "assets";
import siteContent from "const/siteContent";
import ArgentoElement from "components/ArgentoElement";
import ContentContainer from "components/frames/ContentContainer";
import Heading from "components/ui/Heading";
import { anchorMenu } from "const/generals";

export default function AboutUs() {
  return (
    <div id={anchorMenu.aboutUs.anchor} className="aboutUsContainer py-25 bg-cover grid place-content-center shadow-inner overflow-hidden">
      <ContentContainer className="relative ">
        <div className="flex md:flex-nowrap flex-wrap-reverse gap-15 justify-center items-center z-1 relative">
          <div>
          <ArgentoElement />
          </div>
          <div className="text-white grid gap-5 text-center md:text-left">
            <Heading>{siteContent.aboutUs.title}</Heading>
            <div className="font-300 hidden md:flex">{siteContent.aboutUs.contentP1}</div>
            <div className="font-300">{siteContent.aboutUs.contentP2}</div>
            <div className="font-300 hidden lg:flex">{siteContent.aboutUs.contentP3}</div>
          </div>
        </div>
        <img src={images.SilverChunk} className="w-280 absolute z-0 -bottom-120 -left-160 lg:-left-170" />
      </ContentContainer>
    </div>
  );
}
