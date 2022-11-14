import { useState } from "react";
import SectionTitle from "./SectionTitle";
import Select from "./Form/Select";
import ReviewState from "./ReviewState";
import GameReviewItem from "./GameReviewItem";
import SecondaryButton from "./Buttons/SecondaryButton";

const gameReviews = {
    state: {
        counts: 13049,
        average: 4.5,
        scores: [ // in percentage
            {label: "5", value: 50},
            {label: "4", value: 20},
            {label: "3", value: 10},
            {label: "2", value: 5},
            {label: "1", value: 5}
        ]
    },
    reviews: [
        {
            reviewer_photo: "/images/user-photo1.png",
            reviewer_name: "Chmy",
            score: 4.5,
            comment: "The Batman series was a kind of refreshment for the action game genre. A coherent, well-thought-out plot in a semi-open world, where we open new locations as we discover the plot. But what made her so successful was an innovative combat system and a hunter mode, additionally sprinkled with secrets made by a man-made puzzle. It had to be successful and, what can be said, it succeeded perfectly, in virtually every part. Each game in the series can be divided into three main parts: EXPLORING THE WORLD, COMBAT, HUNTER MODE. These are three elements that do not change in any cover except the last one, which also includes the fourth element FIGHT WITH A VEHICLE and RACE (Race mode is mainly additional challenges available from the menu, practically unused in the main campaign)."
        },
        {
            reviewer_photo: "/images/user-photo2.png",
            reviewer_name: "Serenity",
            score: 3.5,
            comment: "Batman: Arkham Asylum is a great game that has a very cool intuitive combat system, still nice-looking graphics, which despite the years do not look outdated and makes the gameplay more pleasant, of course there are also a lot of secrets to discover, which will add many to many hours of searching and solutions. And, of course, the biggest advantage of this game is the game Batman itself, because who did not want to be a Nietoperek in his youth and send a disgusting thud to the hordes of thugs :) Personally, this game gave me a lot of fun and pleasure :)"
        },
        {
            reviewer_photo: "/images/user-photo3.png",
            reviewer_name: "Barry",
            score: 3.0,
            comment: "What can I say, the game was second to none at the time of the premiere and showed that you can make a superhero game something really phenomenal, and with the subsequent parts of the Rocksteady studio showed that they know their job."
        }
    ]

}

const SortOptions = [
    { label: "Newest", value: "newest"},
    { label: "Oldest", value: "oldest"}
]

const GameReviewsSection = ({game}) => {
    const [selectedSort, setSelectedSort] = useState(SortOptions[0]);
    return (
        <div className="flex flex-col gap-y-5 mt-5">
            <div className="flex items-center justify-between">
                <SectionTitle title="Reviews" />
                <Select title="Sort by" options={SortOptions} selected={selectedSort} onChange={setSelectedSort} />
            </div>
            <ReviewState data={gameReviews?.state} />
            {
                gameReviews?.reviews?.length > 0 &&
                <>
                    <div className="flex flex-col divide-y divide-gray-500 mt-3">
                        {
                            gameReviews.reviews.map((elem, idx) => (
                                <GameReviewItem key={idx} data={elem} className="py-5" />
                            ))
                        }
                    </div>
                    <div className="w-full text-center">
                        <SecondaryButton className="p-2 mx-auto">See more comments</SecondaryButton>
                    </div>
                </>
            }
        </div>
    )
}

export default GameReviewsSection;