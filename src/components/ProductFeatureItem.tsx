import { Products } from "const";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

type Props = {
  title: string;
  content: string;
  icon?: IconDefinition;
  theme?: Products;
};

export default function ProductFeatureItem({ title, content, icon }: Props) {
  return (
    <>
      <div className="flex gap-3">
        {icon && (
          <FontAwesomeIcon
            icon={icon}
            className="text-(2xl blue-primary) aspect-square p-3 bg-white rounded-md drop-shadow-md"
          />
        )}
        <div>
          <div className="font-700 text-(blue-primary lg)">{title}</div>
          <div className="font-400 text-sm">{content}</div>
        </div>
      </div>
    </>
  );
}
