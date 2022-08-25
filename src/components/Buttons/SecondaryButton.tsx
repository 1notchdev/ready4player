const SecondaryButton = ({className, children, ...props}) => {
    return (
        <button
            className={`flex items-center bg-white hover:bg-teal-100 text-gray-800 ${className}`}
            {...props}
        >{children}</button>
    )
}
export default SecondaryButton;