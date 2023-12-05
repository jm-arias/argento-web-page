import { images } from "../assets/index";

export default function ArgentoElement() {
  return (
    <div className="pa-5 border-(solid white) rounded-2xl text-white aspect-square ">
      <div className="flex justify-between">
        <div>
          <div className="text-2xl font-800">13</div>
          <div>Años</div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-800">154+</div>
          <div>Clientes</div>
        </div>
      </div>
      <img src={images.LogoWhite} className="h-25" />
      <hr className="my-5"/>
      <div>
        Alto perfil tecnológico e innovador, con profesionales de alta
        especialización.
      </div>
    </div>
  );
}
