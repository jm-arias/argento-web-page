import { identityColor } from "const";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

type Props = {
  title: string;
  content: string;
  icon: IconDefinition;
  theme: identityColor;
};

export default function ProductFeatureItem({ title, content, icon, theme }: Props) {
  return (
    <>
      <div className="flex gap-3">
        {icon && (
          <FontAwesomeIcon
            icon={icon}
            className={['text-2xl', `text-${theme}`, 'aspect-square', 'p-3', 'bg-white', 'rounded-md', 'drop-shadow-md'].join(' ')}
          />
        )}
        <div>
          <div className={['font-700', 'text-lg', `text-${theme}`].join(' ')}>{title}</div>
          <div className="font-400 text-sm">{content}</div>
        </div>
      </div>
    </>
  );
}
