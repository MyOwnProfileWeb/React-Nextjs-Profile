import React, { useState } from 'react';
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";

const ExperienceForm: React.FC<{ addExperience: (title: string, description: string, image: string) => void }> = ({ addExperience }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        addExperience(title, description, image);
        setTitle('');
        setDescription('');
        setImage('');
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-60">
            <InputText
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="p-2 border rounded"
            />
            <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="p-2 border rounded"
            />
            <InputText
                type="text"
                placeholder="Image URL"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                className="p-2 border rounded"
            />
            <Button type="submit" label="Add Experience" className="p-2 bg-blue-500 text-white rounded"/>
        </form>
    );
};

export default ExperienceForm;