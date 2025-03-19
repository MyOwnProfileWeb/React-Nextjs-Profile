import React from 'react';

const ExperienceCard: React.FC<{ title: string; description: string; image: string }> = ({ title, description, image }) => {
    return (
        <div className="card shadow-lg rounded-lg p-4 w-full max-w-xs">
            <div className="flex flex-col items-center">
                <img src={image} alt={title} className="w-full h-48 object-cover rounded"/>
                <div className="text-center">
                    <h3 className="text-lg font-bold mb-2">{title}</h3>
                    <p className="text-gray-600">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default ExperienceCard;