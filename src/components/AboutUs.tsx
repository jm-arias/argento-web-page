import { images } from "../assets";
import siteContent from "../const/siteContent";
import ArgentoElement from "./ArgentoElement";
import ContentContainer from "./frames/ContentContainer";
import Heading from "./ui/Heading";

export default function AboutUs() {
  return (
    <div className="aboutUsContainer py-25 bg-cover grid place-content-center shadow-inner overflow-hidden">
      <ContentContainer className="relative ">
        <div className="flex md:flex-nowrap flex-wrap-reverse gap-15 justify-center items-center z-1 relative">
          <ArgentoElement />
          <div className="text-white grid gap-5 text-center md:text-left">
            <Heading>{siteContent.aboutUs.title}</Heading>
            <div className="font-300">{siteContent.aboutUs.contentP1}</div>
            <div className="font-300 hidden lg:flex">{siteContent.aboutUs.contentP2}</div>
          </div>
        </div>
        <img src={images.SilverChunk} className="w-280 absolute z-0 -bottom-(100) -left-160 lg:-left-150" />
      </ContentContainer>
    </div>
  );
}
