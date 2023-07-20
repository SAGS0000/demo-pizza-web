import React, { useState } from 'react';

const PriceRangeSlider = () => {
    const [value, setValue] = useState(0);

    const handleSliderChange = (event) => {
        setValue(event.target.value);
    };
    return (
        <div className="range-slider">
            <input
                type="range"
                min={0}
                max={100}
                value={value}
                onChange={handleSliderChange}
            />
            <div className="slider-value">{value}</div>
        </div>
    );
};

export default PriceRangeSlider;