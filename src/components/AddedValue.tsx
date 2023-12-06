import siteContent from "../const/siteContent";
import AddedValueItem from "./AddedValueItem";
import ContentContainer from "./frames/ContentContainer";
import {images} from '../assets/index';
import Heading from "./ui/Heading";

export default function AddedValueComponent() {
  return (
      <div className="addedValueheroContainer bg-cover mt-[-15%] grid place-content-center bg-right-top pb-25 pt-30 2xl:mt-[-10%] lg:pt-50 sm:pt-40">
        <ContentContainer>
          <div className="grid gap-10">
            <div className="flex items-center justify-center gap-10">
              <img
                src={images.ArgentoCoin}
                className="hidden h-35 md:inline drop-shadow-md"
              />
              <div>
                <Heading className="text-blue-primary">
                  {siteContent.addedValue.title}
                </Heading>
                <div className="text-md py-2">
                  {siteContent.addedValue.resume}
                </div>
              </div>
            </div>
            <hr className="h-px w-full border-0 bg-gray-300 md:inline hidden" />
            <div className="grid gap-5 lg:grid-cols-2 md:px-5">
              {siteContent.addedValue.content.map((_) => (
                <AddedValueItem icon={_.icon} text={_.text} key={_.text}/>
              ))}
            </div>
          </div>
        </ContentContainer>
      </div>
  );
}
