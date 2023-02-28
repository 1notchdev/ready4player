const Badge = ({content}) => {
    return (
        <span className="inline-block rounded border border-white/[0.08] bg-black/[0.2] text-gray-200 px-2 py-1">
            { content }
        </span>
    )
}

export default Badge;