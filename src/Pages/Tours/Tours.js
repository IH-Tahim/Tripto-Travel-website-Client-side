import React from 'react';
import Services from '../Services/Services';
import CategoryBanner from '../Shared/CategoryBanner/CategoryBanner';

const Tours = () => {
    return (
        <div>
            <h2 className="text-center my-3">Explore All Tours</h2>
            <Services></Services>
            <CategoryBanner></CategoryBanner>

        </div>
    );
};

export default Tours;