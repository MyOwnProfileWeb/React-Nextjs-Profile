import React, { useState } from 'react';
import ExperienceForm from './ExperienceForm';
import ExperienceCard from './ExperienceCard'; // Corrected import statement

const ExperienceSection: React.FC = () => {
    const [experiences, setExperiences] = useState<{ title: string; description: string; image: string }[]>([]);

    const addExperience = (title: string, description: string, image: string) => {
        setExperiences([...experiences, { title, description, image }]);
    };

    return (
        <div className="flex flex-col items-center p-4">
            <ExperienceForm addExperience={addExperience} />
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