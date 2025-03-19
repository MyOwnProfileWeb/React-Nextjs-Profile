import React from 'react';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Quizz from "@/components/Quiz";

const Quiz: React.FC = () => {
    const handleThemeChange = (theme: string) => {
        console.log(`Theme changed to: ${theme}`);
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Header setTheme={handleThemeChange} />
            <main className="flex-grow p-4">
                <Quizz />
            </main>
            <Footer />
        </div>
    );
};

export default Quiz;