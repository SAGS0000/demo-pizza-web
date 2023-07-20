import React from 'react';
import '../menu.scss';
const SizeRadioButton = () => {
    return (
        <div class="pizza-size">
            <label for="small">
                <input type="radio" id="small" name="size" value="small" />
                <p>S</p>
            </label>

            <label for="medium">
                <input type="radio" id="medium" name="size" value="medium" />
                <p>M</p>
            </label>

            <label for="large">
                <input type="radio" id="large" name="size" value="large" />
                <p>L</p>
            </label>

        </div>

    );
};

export default SizeRadioButton;