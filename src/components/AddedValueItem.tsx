type Props = {
  text: string;
  icon: string;
};

export default function AddedValueItem({ text, icon }: Props) {
  return (
    <>
      <div className="h-full flex items-center overflow-hidden rounded-lg bg-white shadow-[0_0px_10px_0px_rgba(63,126,186,0.3)]">
        <div className="h-full py-1rem grid place-content-center px-4 from-violet-500 via-blue-500 to-sky-500 bg-gradient-to-br">
          <i className={`text-(4xl white) i-custom:${icon}`}/>
        </div>
        <div className="px-5 py-3">{text}</div>
      </div>
    </>
  );
}
