const WarningBadge = ({content}) => {
    return (
        <span className="inline-block rounded border border-warning bg-warning/[0.2] text-gray-200 px-2 py-1">
            { content }
        </span>
    )
}

export default WarningBadge;