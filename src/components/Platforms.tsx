const Platforms = ({platforms}) => {
    return (
        <>
            {
                platforms?.length > 0 ? (
                    <div className="flex items-center gap-x-3">
                        {
                            platforms.map((elem, idx) => (
                                <div key={idx} className="flex items-center gap-x-2">
                                    <img src={`/images/icons/${elem.toLowerCase()}.svg`} className="h-[16px]" alt={elem} />
                                    <span>{elem}</span>
                                </div>
                            ))
                        }
                    </div>
                ) : (
                    <p>No Platform Supported</p>
                )
            }
        </>
    )
}
export default Platforms;