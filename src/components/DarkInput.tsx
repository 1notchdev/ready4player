import { useState, useEffect } from "react";

const validationRegex = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  displayName: /^[A-Za-z0-9 _]{3,40}$/,
};

const DarkInput = ({
  placeholder,
  value,
  setValue,
  validation = null,
  errMessage = "Incorrect input",
}) => {
  const [error, setError] = useState("");

  useEffect(() => {
    if (validation) {
      let result = String(value)
        .toLowerCase()
        .match(validationRegex[validation]);
      if (!result) {
        setError(errMessage);
      } else {
        setError("");
      }
    }
  }, [value]);

  return (
    <div className="flex flex-col gap-1">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        onBlur={() => {}}
        className="text-sm text-white outline-none bg-[#131416] border-[#383B42] border px-3 py-3  rounded-md flex gap-3 w-1/3"
      />
      {error && <p className=" text-red-500 text-sm pl-3">{error}</p>}
    </div>
  );
};

export default DarkInput;
