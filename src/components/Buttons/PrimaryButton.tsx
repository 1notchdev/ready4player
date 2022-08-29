const PrimaryButton = ({className, children, ...props}) => {
    return (
        <button
            className={`flex items-center justify-center gap-1 bg-teal-200 hover:bg-teal-300 text-gray-800 rounded ${className}`}
            {...props}
        >{children}</button>
    )
}
export default PrimaryButton;