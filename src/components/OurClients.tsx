import ContentContainer from "components/frames/ContentContainer";
import { images } from "assets/index";

export default function OurClients() {
  return (
    <div className="py-25 flex justify-center bg-center-center bg-cover" style={{
      backgroundImage: `url(${images.abstracWhiteBg})`,
    }}>
      <ContentContainer>
        <div className="grid xl:flex items-center justify-between xl:gap-15 gap-10">
            <span className="xl:text-left text-center xl:text-7xl text-[10vw] sm:text-[5vw] leading-[1em] font-900  from-blue-secondary via-blue-primary to-blue-accent bg-gradient-to-r bg-clip-text text-transparent">
              NUESTROS<br className="hidden xl:inline"/> CLIENTES
            </span>
            <hr className="h-[10rem] border-0 bg-blue-accent pr-[1px] hidden xl:inline" />
            <div className="flex flex-wrap justify-center gap-4">
              {images.clientLogos.map(_ => (
                <img key={_} src={_} className="w-28 shadow-[0_0px_10px_0px_rgba(63,126,186,0.3)] rounded-2"/>
              ))}
            </div>
        </div>
      </ContentContainer>
    </div>
  );
}
