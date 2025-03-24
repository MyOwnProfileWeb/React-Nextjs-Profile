import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { Button } from 'primereact/button';
import { DndContext, useDraggable, useDroppable } from '@dnd-kit/core';

// Define types for the correct answers and selected state
type Answers = {
    [key: string]: string;
};

// @ts-ignore
const DraggableItem = ({ author }) => {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: author,
    });

    const style = {
        transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
    };

    return (
        <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
            <Button className="bg-blue-500 text-white px-4 py-2 rounded">
                {author}
            </Button>
        </div>
    );
};

// @ts-ignore
const DroppableArea = ({ children }) => {
    const { setNodeRef } = useDroppable({
        id: 'droppable',
    });

    return (
        <div ref={setNodeRef}>
            {children}
        </div>
    );
};

const Quizz = () => {
    const [selected, setSelected] = useState<Answers>({});
    const [shuffledColumn2, setShuffledColumn2] = useState<string[]>([]);
    const column1 = ['Work A', 'Work B', 'Work C'];
    const column2 = ['Author A', 'Author B', 'Author C'];

    // Shuffle the column2 array
    useEffect(() => {
        const shuffled = [...column2].sort(() => Math.random() - 0.5);
        setShuffledColumn2(shuffled);
    }, []);

    // Define the correct answers
    const correctAnswers: Answers = {
        'Work A': 'Author A',
        'Work B': 'Author B',
        'Work C': 'Author C'
    };

    const handleDragEnd = (event: { active: any; over: any; }) => {
        const { active, over } = event;
        if (!over) return;

        const newSelected = { ...selected };
        newSelected[active.id] = over.id;
        setSelected(newSelected);
    };

    const handleSubmit = () => {
        const isCorrect = Object.entries(selected).every(
            ([work, author]) => correctAnswers[work] === author
        );

        Swal.fire({
            title: isCorrect ? 'Correct!' : 'Incorrect!',
            html: Object.entries(selected).map(([work, author]) => `<p>${work} - ${author}</p>`).join(''),
            icon: isCorrect ? 'success' : 'error',
            confirmButtonText: 'OK'
        });
    };

    return (
        <DndContext onDragEnd={handleDragEnd}>
            <div className="flex flex-col items-center min-h-screen p-8">
                <h1 className="text-2xl font-bold mb-4">Matching Quiz</h1>
                <p>Match the works with their authors. Drag and drop the author's name to match it with the work.</p>
                <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
                    <div className="grid grid-cols-3 gap-4 mb-4">
                        <div>
                            <h2 className="text-xl font-semibold mb-2">Column 1</h2>
                            {column1.map((work) => (
                                <div key={work} className="mb-2">{work}</div>
                            ))}
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold mb-2">Column 2</h2>
                            <DroppableArea>
                                {shuffledColumn2.map((author) => (
                                    <DraggableItem key={author} author={author} />
                                ))}
                            </DroppableArea>
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold mb-2">Selected</h2>
                            <table className="table-auto w-full">
                                <thead>
                                <tr>
                                    <th className="px-4 py-2">Work</th>
                                    <th className="px-4 py-2">Author</th>
                                </tr>
                                </thead>
                                <tbody>
                                {Object.entries(selected).map(([work, author]) => (
                                    <tr key={work}>
                                        <td className="border px-4 py-2">{work}</td>
                                        <td className="border px-4 py-2">{author}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <Button
                        className="bg-green-500 text-white px-4 py-2 rounded mt-4"
                        onClick={handleSubmit}
                    >
                        Submit
                    </Button>
                </div>
            </div>
        </DndContext>
    );
};

export default Quizz;