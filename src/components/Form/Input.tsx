import { useEffect, useState } from "react";
import Label from "./Label";

const validationRegex = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  displayName: /^[A-Za-z0-9 _]{3,40}$/,
};
  
const Input = ({
  labelText="",
  id="",
  name="",
  type,
  placeholder="",
  value,
  onChange,
  validation = null,
  required = false,
  errMessage = "Incorrect input",
  prefixText = "",
  disabled=false,
}) => {

  const [error, setError] = useState<String>("");

  useEffect(() => {
    if (value && validation) {
      let result = String(value)
        .toLowerCase()
        .match(validationRegex[validation]);
      if (!result) {
        setError(errMessage);
      } else {
        setError("");
      }
    } else {
      setError("");
    }
  }, [value]);

  return (
    <div className="flex flex-col gap-1">
      {
        labelText &&
        <Label htmlFor={id}>
          {labelText}:
          {required && <span className="pl-1 text-red-500">*</span>}
        </Label>
      }
      {
        prefixText? (
          <div className="flex items-center bg-second w-full rounded-md">
            <span
              className="bg-[#181C27] px-3 py-2 text-white/[0.42]">
              {prefixText}
            </span>
            <input
              id={id}
              name={name}
              type={type}
              value={value}
              onChange={(e) => onChange(e)}
              placeholder={placeholder}
              className="bg-transparent border border-transparent outline-none focus:border-darkblue px-3 py-2 flex-1 rounded-r-md placeholder:text-white/[0.32]"
              disabled={disabled}
            />
          </div>
        ) : (
          <input
            id={id}
            name={name}
            type={type}
            value={value}
            onChange={(e) => onChange(e)}
            placeholder={placeholder}
            className="bg-second border border-transparent outline-none focus:border-darkblue px-3 py-2 rounded-md placeholder:text-white/[0.32]"
            disabled={disabled}
          />
        )
      }
      {error && <p className=" text-red-500 text-sm pl-3">{error}</p>}
    </div>
  )
}

export default Input;