const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const multer = require('multer');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'react',
    password: 'Mjose123',
    port: 5432,
});

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});

const upload = multer({ storage });

app.post('/upload', upload.single('image'), (req, res) => {
    const { title, description } = req.body;
    const imagePath = req.file.path;

    pool.query(
        'INSERT INTO experiences (title, description, image) VALUES ($1, $2, $3) RETURNING *',
        [title, description, imagePath],
        (err, result) => {
            if (err) {
                console.error('Error saving experience:', err);
                res.status(500).send('Server error');
            } else {
                res.json({ imagePath });
            }
        }
    );
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});

module.exports = { createUserTable, createExperiencesTable };