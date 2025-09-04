import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../frontend')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

app.get('/setup', (req, res) => {
  res.sendFile(path.join(__dirname, 'setup.html'));
});

app.get('/health', (req, res) => res.json({ ok: true, time: new Date().toISOString() }));

const port = process.env.PORT || 8080;
app.listen(port, () => console.log('Server running on port', port));
