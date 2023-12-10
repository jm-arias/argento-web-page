import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  text: string;
  icon: IconDefinition;
};

export default function AddedValueItem({ text, icon }: Props) {
  return (
    <>
      <div className="flex items-center overflow-hidden rounded-lg bg-white shadow-[0_0px_10px_0px_rgba(63,126,186,0.3)]">
        <div className="h-full py-1rem flex items-center px-4 from-blue-secondary via-blue-primary to-blue-accent bg-gradient-to-br">
          {icon && <FontAwesomeIcon icon={icon} className={`text-(4xl white) i-custom:${icon} aspect-square`} />}
        </div>
        <div className="px-5 py-3">{text}</div>
      </div>
    </>
  );
}
