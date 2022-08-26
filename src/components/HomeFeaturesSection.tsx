import FeatureCard from "./Cards/FeatureCard";

const features: Array<any> = [
    {
        name: "New Games",
        image: "./images/newgame.jpg",
        description: "Over 35 arcade games, each fully realized with its own gameplay.",
        btnTitle: "Browse the games",
        btnLink: "/"
    },
    {
        name: "FreeToPlay",
        image: "./images/freetoplay.jpg",
        description: "Phoenix Play4Free delivers state of the art FPS online game action for free!",
        btnTitle: "Play4Free",
        btnLink: "/"
    },
    {
        name: "MAFIA VI -40%",
        image: "./images/mafiavi.jpg",
        description: "A one stop shop for all your gaming needs, at the cheapest prices possible.",
        btnTitle: "Check the offer",
        btnLink: "/"
    }
]
const HomeFeaturesSection = () => {
    return (
        <div className="container mx-auto flex grid grid-cols-1 md:grid-cols-3 gap-4">
            {
                features.map((feature, idx) => (
                    <FeatureCard key={idx} featureData={feature} />
                ))
            }
        </div>
    )
}

export default HomeFeaturesSection;