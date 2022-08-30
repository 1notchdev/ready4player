import { useEffect, useState } from "react";

const Languages = ({languages}) => {
    return (
        <>
        {
            (languages && languages.length > 0) ? (
                <div className="flex items-center gap-x-2">
                    <img src="/images/icons/language.svg" className="h-[16px]" />
                    <div className="flex items-center">
                        <span>{languages[0]}</span>
                        {
                            languages.length > 1 &&
                            <span className="px-2">
                                {`and ${languages.length - 1} other`}
                            </span>
                        }
                    </div>
                </div>
            ) : (
                <p>No Language Supported</p>
            )
        }
        </>

    )
}
export default Languages;