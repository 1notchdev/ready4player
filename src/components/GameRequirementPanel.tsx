import Badge from "./Badges/Badge";

const GameRequirementPanel = ({data, className=""}) => {
    return (
        <div className={`flex flex-col gap-y-2 ${className}`}>
        {
            data?.length > 0 &&
            data.map((elem, idx) => (
                <div key={idx} className='flex items-center'>
                    <span className='basis-1/3 text-gray-500'>{elem.label}</span>
                    <div className='basis-2/3'>
                        <Badge content={elem.value} />
                    </div>
                </div>
            ))
        }
        </div>
    )
}

export default GameRequirementPanel;