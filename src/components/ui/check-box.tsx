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
            ? "bg-green-500 border-green-500"
            : "border-zinc-600 bg-zinc-800"
        }`}
        onClick={onChange}
      >
        {checked && <IconCheck/>}
      </div>
      <label
        htmlFor={id}
        className="text-sm font-medium leading-none cursor-pointer"
        onClick={onChange}
      >
        {label}
      </label>
    </div>
  );
}
