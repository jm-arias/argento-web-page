import { images } from "assets/index";

export default function ArgentoElement() {
  return (
    <div className="pa-5 border-(solid white 6) rounded-2xl text-white aspect-square w-60 h-60 md:w-75 md:h-75 grid content-between bg-[rgba(10,43,74,0.6)] shadow-lg backdrop-blur-lg">
      <div className="flex justify-between leading-3 ">
        <div>
          <div className="text-2xl font-800">{(new Date).getFullYear() - 2013}</div>
          <div>Años</div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-800">50+</div>
          <div>Clientes</div>
        </div>
      </div>
      <div>
        <div className="text-center">
          <img src={images.logoWhite} className="w-[75%]" />
        </div>
        <hr className="my-4 w-full" />
        <div className="text-center text-xs">
          Alto perfil tecnológico e innovador, con profesionales de alta
          especialización.
        </div>
      </div>
    </div>
  );
}
