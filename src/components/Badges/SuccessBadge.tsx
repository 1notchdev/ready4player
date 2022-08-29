const SuccessBadge = ({content}) => {
    return (
        <span className="inline-block rounded border border-success bg-success/[0.2] text-gray-200 px-2 py-1">
            { content }
        </span>
    )
}

export default SuccessBadge;