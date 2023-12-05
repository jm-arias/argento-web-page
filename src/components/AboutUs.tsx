import siteContent from "../const/siteContent";
import ArgentoElement from "./ArgentoElement";
import ContentContainer from "./frames/ContentContainer";
import Heading from "./ui/Heading";

export default function AboutUs() {
  return (
    <div className="aboutUsContainer py-25 bg-cover grid place-content-center ">
      <ContentContainer>
        <div className="flex flex-nowrap gap-10 items-center">
          <ArgentoElement />
          <div className="text-white grid gap-5">
            <Heading>{siteContent.aboutUs.title}</Heading>
            <div className="font-300">{siteContent.aboutUs.contentP1}</div>
            <div className="font-300">{siteContent.aboutUs.contentP2}</div>
          </div>
        </div>
      </ContentContainer>
    </div>
  );
}
