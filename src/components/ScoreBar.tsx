const ScoreBar = ({label, value}) => {
    return (
        <div className="flex items-center gap-2">
            <span>{label}</span>
            <div className="flex-1">
                <div className="w-full bg-white/[0.12] h-[3px]">
                    <div className="bg-primary h-full"
                        style={{width: `${value}%`}}
                     />
                </div>
            </div>
        </div>
    )
}

export default ScoreBar;