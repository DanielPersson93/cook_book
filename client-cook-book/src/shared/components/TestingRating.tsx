import { useState } from "react";
import starYellow from '../../assets/starYellow.svg'
import star from '../../assets/star.svg'

const RateRecipe = () => {
    const [selectedRatingLevel, setSelectedRatingLevel] = useState(0);
    const [selectedRating, setSelectedRating] = useState(0);

    return (
        <>
            {[1, 2, 3, 4, 5].map((num) => (
                <div onClick={() => setSelectedRatingLevel(num)} onMouseEnter={() => setSelectedRating(num)} onMouseLeave={() => setSelectedRating(selectedRatingLevel)}>
                    {selectedRating >= num ? <img src={starYellow} alt="Start icon" /> : <img src={star} alt="Start icon" />}
                    {num}
                </div>
            ))}
        </>
    )
};

export default RateRecipe;