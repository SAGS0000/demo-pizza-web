import React from 'react';
import '../menu.scss';
const SortingItem = () => {
    return (
        <>
            <select>
                <option value="default">Default Sort</option>
                <option value="ascend">A-Z</option>
                <option value="descend">Z-A</option>
            </select>
        </>
    );
};

export default SortingItem;