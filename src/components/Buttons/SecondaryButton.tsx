const SecondaryButton = ({className="", children, ...props}) => {
    return (
        <button
            className={`flex items-center justify-center gap-1 bg-white/[0.05] hover:bg-white/[0.1] border border-gray-700 text-gray-100 rounded ${className}`}
            {...props}
        >{children}</button>
    )
}
export default SecondaryButton;