import { anchorMenu } from "const/generals";
import { images } from "assets/index";

export default function HeaderNav() {
  return (
    <div className="absolute w-full">
      <div className="flex items-center justify-between px-5 pb-12 pt-5 lg:px-10">
        <img src={images.argentoLogo} className="h-7 lg:h-9 sm:h-8 xl:h-10" />
        <div className="hidden gap-5 sm:flex md:gap-5">
          {Object.values(anchorMenu).map((_) => (
            <a
              href={`#${_.anchor}`}
              className="text-sm text-blue-primary no-underline"
              key={_.text}
            >
              <span className="text-(blue-primary sm) font-700 bg-white px-3 py-1 rounded-2xl shadow-[0_0px_20px_0px_rgba(63,126,186,0.3)]">
                {_.text}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
