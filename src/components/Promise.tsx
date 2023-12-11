import ContentContainer from "components/frames/ContentContainer";
import { images } from "assets/index";
import Heading from "components/ui/Heading";
import siteContent from "const/siteContent";

export default function Promise() {
  return (
    <div
      className="py-25 flex justify-center bg-bottom-center bg-cover"
      style={{
        backgroundImage: `url(${images.abstractBuildingBg02})`,
      }}
    >
      <ContentContainer>
        <div className="grid gap-4 md:w-[70%] text-center md:text-left ">
            <Heading className="text-blue-primary">
              {siteContent.promise.title}
              <div className="text-[0.6em] font-800 leading-[1em] lg:text-[1.6rem] md:text-[2.5vw]">
                {siteContent.promise.titleTag.map((_, i) => (
                  <span key={_}>
                    {i ? (
                      <span className="mx-1 text-blue-primary font-300">/</span>
                    ) : null}
                    <span className="text-blue-accent">{_}</span>
                  </span>
                ))}
              </div>
            </Heading>
            <div className="text-blue-primary">
              <span className="hidden md:inline">{siteContent.promise.contentP1}</span>
              <span>{siteContent.promise.contentP2}</span>
            </div>
          </div>
      </ContentContainer>
    </div>
  );
}
