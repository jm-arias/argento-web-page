import siteContent from "const/siteContent";
import ContentContainer from "components/frames/ContentContainer";
import { images } from "assets/index";

export default function OurClients() {
  return (
    <div className="p-40" style={{
      backgroundImage: images.AbstracWhiteBg,
    }}>
      <ContentContainer>
        <div className="flex">
            <div className="text-6xl font-900">NUESTROS CLIENTES</div>
            <div className="grid grid-flow-col">
              {siteContent.ourClients.items.map(_ => (
                <img src={_} className="aspect-[4/2] w-100"/>
              ))}
            </div>
        </div>
      </ContentContainer>
    </div>
  );
}
