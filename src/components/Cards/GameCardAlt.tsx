import TagItems from "../TagItems";

const GameCardAlt = ({gameData, ...props}) => {
    return (
        <div className="rp-card rp-border-color border flex flex-col w-full rounded-md overflow-hidden relative aspect-square" {...props}>
            <img src={gameData.image} className="w-full h-full object-cover object-center absolute" />
            <div className="mask-gradient absolute w-full h-full top-0 left-0"></div>
            <div className="p-4 text-gray-100 absolute w-full bottom-0">
                <p className="font-semibold text-sm mb-2">{gameData?.name}</p>
                {
                    gameData?.tags?.length > 0 && <TagItems tags={gameData.tags} />
                }
                <div className="price-wrapper rp-border-color border h-[40px] p-1 text-center mt-3 rounded text-sm flex items-center justify-between">
                    {
                        gameData.sale? (
                            <>
                                <div className="sale-percent text-xs px-2 py-1 rounded">{gameData.sale}</div>
                                <p>
                                    <span className="text-gray-600 line-through pr-1">{`$${gameData.price}`}</span>
                                    <span>{`$${gameData.salePrice}`}</span>
                                </p>
                            </>
                        ):(
                            <p className="text-sm mx-auto">{`$${gameData.price}`}</p>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
export default GameCardAlt;