import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import '../itemInfo.scss'; // Import your CSS file for styling

const StarRating = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    const handleStarClick = (starIndex) => {
        setRating(starIndex);
    };

    return (
        <div className="star-rating">
            {[...Array(5)].map((_, index) => {
                const starValue = index + 1;
                return (
                    <label key={index}>
                        <input
                            type="radio"
                            name="rating"
                            value={starValue}
                            onClick={() => handleStarClick(starValue)}
                        />
                        <FaStar
                            className="star"
                            color={starValue <= (hover || rating) ? 'gold' : 'gray'}
                            size={20}
                            onMouseEnter={() => setHover(starValue)}
                            onMouseLeave={() => setHover(0)}
                        />
                    </label>
                );
            })}
        </div>
    );
};

export default StarRating;
