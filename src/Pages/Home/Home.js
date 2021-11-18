import React from 'react';
import Services from '../Services/Services';
import CategoryBanner from '../Shared/CategoryBanner/CategoryBanner';
import ShortAbout from '../Shared/ShortAbout/ShortAbout';
import Banner from './Banner/Banner';
import HomeBlogs from './HomeBlogs/HomeBlogs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <h4 className="color_primary mb-0 mt-4 display_font text-center">Explore Greate Places</h4>
            <h1 className="text-center mb-3">Our Top Packages</h1>
            <Services></Services>
            <ShortAbout></ShortAbout>
            <HomeBlogs></HomeBlogs>
            <CategoryBanner></CategoryBanner>

        </div>
    );
};

export default Home;