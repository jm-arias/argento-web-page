import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { images } from "assets/index";
import { anchorMenu } from "const";
import siteContent from "const/siteContent";

export default function Contact() {
  return (
    <div id={anchorMenu.contact.anchor} className="md:flex">
      <div
        className="md:py-25 py-15 px-5 md:px-25 grid gap-5 md:gap-8 md:w-150 bg-center-center bg-cover text-white flex-wrap justify-center"
        style={{
          backgroundImage: `url(${images.abstractBlueBg02})`,
        }}
      >
        <span className="lg:text-left text-center lg:text-5xl text-[7vw] sm:text-[5vw] leading-[1em] font-900">
          {siteContent.contact.title}
        </span>
        <hr className="border-0 h-[1px] bg-white-accent m-0 md:hidden " />
        <div className="grid grid-cols-1 md:grid-cols-1 sm:grid-cols-2 gap-5 font-300 text-center md:text-left">
          <div className="flex items-center sm:col-span-2 md:col-span-1">
            <FontAwesomeIcon
              icon={siteContent.contact.adress.icon}
              className="text-xl mr-4"
            />
            <div>
              <span className="w-full">{siteContent.contact.adress.place}</span>
              <br className="hidden sm:inline md:hidden" />
              <span className="w-full">
                {siteContent.contact.adress.location}
              </span>
            </div>
          </div>
          <hr className="border-0 h-[1px] bg-white-accent md:w-full m-0 hidden md:inline" />
          <div className="flex justify-center md:justify-start">
            <FontAwesomeIcon
              icon={siteContent.contact.phone.icon}
              className="text-xl mr-4"
            />
            <span>{siteContent.contact.phone.number}</span>
          </div>
          <hr className="border-0 h-[1px] bg-white-accent md:w-full m-0 hidden md:inline" />
          <div className="flex justify-center md:justify-start">
            <FontAwesomeIcon
              icon={siteContent.contact.email.icon}
              className="text-xl mr-4"
            />
            <span>{siteContent.contact.email.text}</span>
          </div>
        </div>
      </div>
      <div className="mapouter w-full overflow-hidden">
        <div className="gmap_canvas w-full h-80 md:h-full">
          <iframe
            width="100%"
            height="100%"
            className="border-0"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Calle%20Jos%C3%A9%20Andr%C3%A9s%20Aybar%20Castellanos%20No.%2087%20+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
