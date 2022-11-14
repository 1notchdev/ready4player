const Payments = ({payments}) => {
    return (
        <>
        {
            payments?.length > 0? (
                <div className="flex bg-white/[0.03] border border-white/[0.08] rounded py-1 divide-x divide-white/[0.08]">
                {
                    payments.map((elem, idx) => (
                        <div key={idx} className="flex items-center px-2 gap-1">
                            <span className="uppercase">${elem}</span>
                            <img src={`/images/icons/${elem.toLowerCase()}.svg`}
                                className="h-5" />
                        </div>
                    ))
                }
                </div>
            ) : (
                <p>No Supported Payments</p>
            )
        }
        </>
        
    )
}
export default Payments;