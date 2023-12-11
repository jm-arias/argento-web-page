import siteContent from "const/siteContent";
import AddedValueItem from "components/AddedValueItem";
import ContentContainer from "components/frames/ContentContainer";
import { images } from "assets/index";
import Heading from "components/ui/Heading";

export default function AddedValue() {
  return (
    <div
      className="bg-cover flex justify-center bg-right-top pb-25 pt-30 lg:pt-50 sm:pt-40"
      style={{
        backgroundImage: `url(${images.whiteDiagonalClipedBg})`,
        filter: "drop-shadow(0px -20px 10px rgba(0,48,119,0.1))",
      }}
    >
      <ContentContainer>
        <div className="grid gap-10">
          <div className="flex items-center justify-center gap-10">
            <img
              src={images.argentoCoin}
              className="hidden h-35 md:inline drop-shadow-md"
            />
            <div className="text-center md:text-left">
              <Heading className="text-blue-primary">
                {siteContent.addedValue.title}
              </Heading>
              <div className="text-md py-2">
                <span>{siteContent.addedValue.contentP1}</span>
                <span className="hidden md:inline">
                  {siteContent.addedValue.contentP2}
                </span>
              </div>
            </div>
          </div>
          <hr className="h-px w-full border-0 bg-gray-300 md:inline hidden" />
          <div className="grid gap-5 lg:grid-cols-2 md:px-5">
            {siteContent.addedValue.items.map((_) => (
              <AddedValueItem icon={_.icon} text={_.text} key={_.text} />
            ))}
          </div>
          <hr className="h-px w-full border-0 bg-gray-300 md:inline hidden" />
        </div>
      </ContentContainer>
    </div>
  );
}
