import { anchorMenu } from "const/generals";
import { images } from "assets/index";

export default function HeaderNav() {
  return (
    <div className="absolute w-full from-white from-20% bg-gradient-to-b">
      <div className="flex items-center justify-between px-5 pb-12 pt-5 lg:px-10">
        <img src={images.argentoLogo} className="h-7 lg:h-9 sm:h-8 xl:h-10" />
        <div className="hidden gap-5 sm:flex md:gap-10">
          {Object.values(anchorMenu).map((_) => (
            <a
              href={`#${_.anchor}`}
              className="text-sm text-blue-primary no-underline"
              key={_.text}
            >
              {_.text}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
