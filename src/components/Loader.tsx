import { images } from "assets/index";
import Heading from "components/ui/Heading";
import siteContent from "const/siteContent";
import { useState } from "react";

export default function Loader() {
  const [display, setDisplay] = useState<"hidden" | "inline">("hidden");

  document.onreadystatechange = () => {
    document.readyState === "complete" && setDisplay("hidden");
    document.readyState !== "complete" && setDisplay("inline");
  };

  return (
    <div
      className={[
        "w-screen h-screen",
        "fixed",
        "z-100",
        "bg-gradient-to-b from-cyan-100 to-blue-100",
        display,
      ].join(" ")}
    >
      <div className="flex items-center justify-center w-full h-full relative">
        <div className="text-center">
          <img src={images.spiner} />
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
        </div>
        <img src={images.argentoLogo} className="absolute w-50 bottom-5" />
      </div>
    </div>
  );
}
