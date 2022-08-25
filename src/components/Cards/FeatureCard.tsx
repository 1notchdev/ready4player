import Link from "next/link";
import SecondaryButton from "../Buttons/SecondaryButton";

// import { Link } from 'react-router-dom';
const FeatureCard = ({featureData, ...props}) => {
    return (
        <div className="rp-card rp-border-color border flex flex-col w-full rounded-md overflow-hidden relative aspect-3/4" {...props}>
            <img src={featureData?.image} className="w-full h-full object-cover object-center absolute" />
            <div className="p-4 text-gray-100 absolute bottom-5 left-5 right-5 bg-black/80 rounded-lg flex flex-col items-center gap-y-3">
                <p className="font-semibold text-lg uppercase">{featureData?.name}</p>
                <p className="text-sm font-normal text-center">{featureData?.description}</p>
                <Link href={featureData?.btnLink}>
                    <SecondaryButton className={`px-3 py-2 rounded`}>
                        {featureData?.btnTitle}
                    </SecondaryButton>
                </Link>
            </div>
        </div>
    )
}
export default FeatureCard;