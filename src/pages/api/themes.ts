import fs from 'fs';
import path from 'path';
import type { NextApiRequest, NextApiResponse } from 'next';

interface Theme {
    label: string;
    value: string;
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Theme[] | { error: string }>
) {
    const themesDir = path.join(process.cwd(), '/public/themes');

    fs.readdir(themesDir, (err, files) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to read themes directory' });
        }

        const themes: Theme[] = files.map((file) => ({
            label: file.replace(/-/g, ' '),
            value: file,
        }));

        res.status(200).json(themes);
    });
}
