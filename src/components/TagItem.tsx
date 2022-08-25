const TagItem = ({children, ...props}) => {
    return (
        <div className="rp-tag flex gap-x-2 px-2 py-1 text-gray-100 text-xs rounded"
            {...props}
        >
            {children}
        </div>
    )
}

export default TagItem;