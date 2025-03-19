import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

const ContactForm: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', { name, email, message });
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className="flex justify-center items-center mt-60">
            <Card title="Contact Us">
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-8">
                    <InputText
                        type="text"
                        placeholder="Title"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="p-2 border rounded"
                    />
                    <InputText
                        type="text"
                        placeholder="Title"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="p-2 border rounded"
                    />
                    <textarea
                        placeholder="Description"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="p-2 border rounded"
                    />
                    <Button type="submit" label="Submit" className="p-2 bg-blue-500 text-white rounded"/>
                </form>
            </Card>
        </div>
    );
};

export default ContactForm;