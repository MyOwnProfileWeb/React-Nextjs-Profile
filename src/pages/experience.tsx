import React from 'react';
import Header from "@/components/layout/Header";
import ExperienceSection from "@/components/ExperienceSection";
import Footer from "@/components/layout/Footer";

const Experience: React.FC = () => {
    const handleThemeChange = (theme: string) => {
        console.log(`Theme changed to: ${theme}`);
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Header setTheme={handleThemeChange} />
            <main className="flex-grow p-4">
                <ExperienceSection />
            </main>
            <Footer />
        </div>
    );
};

export default Experience;