import IconCheck from "../icons/iconCheck";

interface CheckBoxProps {
  id: string;
  label: string;
  checked: boolean;
  onChange: () => void;
}

export default function CheckBox({
  id,
  label,
  checked,
  onChange,
}: CheckBoxProps) {
  return (
    <div className="flex items-center space-x-2">
      <div
        className={`w-4 h-4 rounded border flex items-center justify-center cursor-pointer ${
          checked
            ? "bg-[#8EC400] border-[#8EC400]"
            : "border-[#302E2E] bg-background"
        }`}
        onClick={onChange}
      >
        {checked && <IconCheck color="#000" />}
      </div>
      <label
        htmlFor={id}
        className="text-lg font-medium leading-none cursor-pointer"
        onClick={onChange}
      >
        {label}
      </label>
    </div>
  );
}
