import React, { useEffect, useRef, useState } from 'react';
import '../menu.scss';
import { BsFilterLeft } from 'react-icons/bs';
import PriceRangeSlider from './PriceRangeSlider';
const FilterButton = () => {

    const [open, setOpen] = useState(false);
    const drawerRef = useRef(null);
    const buttonRef = useRef(null);

    const toggleDrawer = (e) => {
        e.stopPropagation();
        setOpen(!open);
    };


    const handleClickOutside = (event) => {
        if (drawerRef.current && !drawerRef.current.contains(event.target)) {
            setOpen(false);
        }
    };

    useEffect(() => {

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [open]);

    return (
        <>
            <button
                ref={buttonRef}
                onClick={toggleDrawer}>
                <BsFilterLeft size={25} />
                FILTER
            </button>
            <div ref={drawerRef}
                className={`drawer ${open ? 'open' : ''}`}>
                {/* Content of the drawer goes here */}
                <h2>Custom Drawer Content</h2>
                <PriceRangeSlider />
                <p>This is the content of the custom drawer.</p>
            </div>
        </>
    );
};

export default FilterButton;