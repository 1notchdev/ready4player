const PrimaryButton = ({ className, disabled = false, children, ...props }) => {
  return (
    <button
      className={`flex items-center bg-teal-200 hover:bg-teal-300 text-gray-800 rounded px-3 py-2 ${className} disabled:cursor-default disabled:bg-gray-300`}
      {...props}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
export default PrimaryButton;
