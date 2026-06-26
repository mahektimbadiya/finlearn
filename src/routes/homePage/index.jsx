import React from "react";
import HeroSection from "./heroSection";
import CoursesSection from "./coursesSection";
import ExploreCategories from "./exploreCategories";
import FeaturedCourses from "./featuredCourses";
import FeaturedEducators from "./featuredEducators";
import StudentSuccess from "./studentSuccess";

export default function HomePage() {
    return (
        <div>
            <HeroSection />
            <CoursesSection />
            <ExploreCategories />
            <FeaturedCourses />
            <FeaturedEducators />
            <StudentSuccess />
        </div>
    )
}