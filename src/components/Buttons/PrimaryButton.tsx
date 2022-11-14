const PrimaryButton = ({className, children, ...props}) => {
    return (
        <button
            className={`flex items-center justify-center gap-1 bg-primary hover:bg-primary/[0.8] text-gray-800 rounded ${className}`}
            {...props}
        >{children}</button>
    )
}
export default PrimaryButton;