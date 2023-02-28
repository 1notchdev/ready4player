import Label from "./Label";

const Textarea = ({
  labelText = "",
  id = "",
  name = "",
  placeholder = "",
  value,
  onChange,
  required = false,
  disabled=false,
}) => {

  // const [error, setError] = useState<string>("");

  // useEffect(() => {
  //   if (required && !value) {
  //       setError("Required!");
  //   } else {
  //       setError("");
  //   }
  // }, [value]);

  return (
    <div className="flex flex-col gap-1">
      {
        labelText &&
        <Label htmlFor={id}>
          {labelText}:
          {required && <span className="text-red-500">*</span>}
        </Label>
      }
      <textarea
        id={id}
        name={name}
        rows={5}
        value={value}
        onChange={(e) => onChange(e)}
        placeholder={placeholder}
        className="bg-second border border-transparent outline-none focus:border-darkblue px-3 py-2 rounded-md placeholder:text-white/[0.32]"
        disabled={disabled}
      />
    </div>
  )
}

export default Textarea;