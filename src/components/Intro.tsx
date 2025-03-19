import React from 'react';

const Intro: React.FC = () => {
    return (
        <div className="card shadow-lg rounded-lg p-4 w-full max-w-md">
            <div className="flex flex-col items-center">
                <img
                    src="/thabang.jpg"
                    alt="Profile"
                    className="rounded-full mb-4"
                />
                <div className="text-center">
                    <h2 className="text-xl font-bold mb-2">Joseph Thabang</h2>
                    <p className="text-gray-600">
                        Hi, I'm John Doe, a passionate software developer with a love for creating
                        innovative solutions. I have experience in web development, mobile app
                        development, and cloud computing. In my free time, I enjoy hiking, reading,
                        and exploring new technologies.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Intro;