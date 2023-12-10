import { images } from "assets/index";
import siteContent from "const/siteContent";

export default function Footer() {
  return (
    <div className="bg-blue-primary border-t-(3 blue-accent solid) md:flex items-center md:justify-between text-center p-5 lg:px-10">
      <img src={images.argentoLogoFlatWhite} className="h-8 max-w-screen" />
      <div className="text-(xs white ) font-300">
        {siteContent.footer.copyRight}
      </div>
    </div>
  );
}
