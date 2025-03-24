import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { Button } from 'primereact/button';
// @ts-ignore
import { Graph } from 'react-d3-graph';

// Define types for the correct answers and selected state
type Answers = {
    [key: string]: string;
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

    const handleSelect = (author: string) => {
        if (!selected['Work A']) {
            setSelected({ ...selected, 'Work A': author });
        } else {
            const remainingWorks = column1.filter(work => !selected[work]);
            if (remainingWorks.length > 0) {
                setSelected({ ...selected, [remainingWorks[0]]: author });
            }
        }
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

    // Graph configuration
    const data = {
        nodes: [
            ...column1.map(work => ({ id: work, symbolType: 'square' })),
            ...shuffledColumn2.map(author => ({ id: author }))
        ],
        links: Object.entries(selected).map(([work, author]) => ({ source: work, target: author }))
    };

    const config = {
        nodeHighlightBehavior: true,
        node: {
            color: 'lightblue',
            size: 120,
            highlightStrokeColor: 'blue'
        },
        link: {
            highlightColor: 'lightblue'
        }
    };

    return (
        <div className="flex flex-col items-center min-h-screen p-8">
            <h1 className="text-2xl font-bold mb-4">Matching Quiz</h1>
            <p>Match the works with their authors. Click on the author's name to match it with the work. First author clicked belongs to first work.</p>
            <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                        <h2 className="text-xl font-semibold mb-2">Column 1</h2>
                        {column1.map((work) => (
                            <div key={work} className="mb-2">{work}</div>
                        ))}
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold mb-2">Column 2</h2>
                        {shuffledColumn2.map((author) => (
                            <div key={author} className="mb-2">
                                <Button
                                    className="bg-blue-500 text-white px-4 py-2 rounded"
                                    onClick={() => handleSelect(author)}
                                >
                                    {author}
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
                <Button
                    className="bg-green-500 text-white px-4 py-2 rounded mt-4"
                    onClick={handleSubmit}
                >
                    Submit
                </Button>
            </div>
            <div className="mt-8 w-full max-w-md">
                <Graph
                    id="graph-id"
                    data={data}
                    config={config}
                />
            </div>
        </div>
    );
};

export default Quizz;