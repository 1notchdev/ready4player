const TagItem = ({children, ...props}) => {
    return (
        <div className="flex gap-x-2 bg-black/[0.75] px-2 py-1 text-gray-100 text-xs rounded"
            {...props}
        >
            {children}
        </div>
    )
}

export default TagItem;