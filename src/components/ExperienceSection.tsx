import React, { useState } from 'react';
import ExperienceCard from './ExperienceCard';

const ExperienceSection: React.FC = () => {
    const [experiences, setExperiences] = useState<{ title: string; description: string; image: string }[]>([
        { title: "Junior Full Stack Developer", description: "A thrilling experience of hiking through the Rocky Mountains.", image: "https://i.ytimg.com/vi/mOHTQk63TS8/maxresdefault.jpg" },
        { title: "Logistic Lead", description: "Relaxing on the sunny beaches of the Caribbean.", image: "https://th.bing.com/th/id/OIP.px8Wj5sS9Hhh8ePrbhz64QHaCy?rs=1&pid=ImgDetMain" },
        { title: "IT Learnership", description: "Relaxing on the sunny beaches of the Caribbean.", image: "https://i.ytimg.com/vi/2vsEgVtiXXo/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AHUBoAC4AOKAgwIABABGDwgVyhlMA8=&rs=AOn4CLDN5vaaVcCGbt03a43fNOmiBoye1A" }
    ]);

    const addExperience = (title: string, description: string, image: string) => {
        setExperiences([...experiences, { title, description, image }]);
    };

    return (
        <div className="flex flex-col items-center p-4">
            <div className="flex justify-center mt-8 gap-4 flex-wrap">
                {experiences.map((exp, index) => (
                    <ExperienceCard
                        key={index}
                        title={exp.title}
                        description={exp.description}
                        image={exp.image}
                    />
                ))}
            </div>
        </div>
    );
};

export default ExperienceSection;