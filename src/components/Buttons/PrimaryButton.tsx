const PrimaryButton = ({className, children, ...props}) => {
    return (
        <button
            className={`flex items-center bg-teal-200 hover:bg-teal-300 text-gray-800 ${className}`}
            {...props}
        >{children}</button>
    )
}
export default PrimaryButton;