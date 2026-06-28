import React from "react";
import HeroSection from "./heroSection";
import CoursesSection from "./coursesSection";
import ExploreCategories from "./exploreCategories";
import FeaturedCourses from "./featuredCourses";
import FeaturedEducators from "./featuredEducators";
import StudentSuccess from "./studentSuccess";
import ReferFriends from "./referFriends";
import JoinTheFinLearn from "./joinTheFinLearn";
import BlogsAndInsights from "./blogsAndInsights";

export default function HomePage() {
    return (
        <div>
            <HeroSection />
            <CoursesSection />
            <ExploreCategories />
            <FeaturedCourses />
            <FeaturedEducators />
            <StudentSuccess />
            <ReferFriends />
            <JoinTheFinLearn />
            <BlogsAndInsights />
        </div>
    )
}