import React from 'react';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AboutComponent from "@/components/About";

const About: React.FC = () => {
    const handleThemeChange = (theme: string) => {
        console.log(`Theme changed to: ${theme}`);
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Header setTheme={handleThemeChange} />
            <main className="flex-grow p-4">
                <AboutComponent />
            </main>
            <Footer />
        </div>
    );
};

export default About;