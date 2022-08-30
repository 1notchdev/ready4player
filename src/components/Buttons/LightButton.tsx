const LightButton = ({className, children, ...props}) => {
    return (
        <button
            className={`flex items-center justify-center gap-1 bg-white hover:bg-teal-100 text-gray-800 rounded ${className}`}
            {...props}
        >{children}</button>
    )
}
export default LightButton;