// -------------------------------
// Express eta MongoDB driver-a inportatu
// CORS ere inportatu, bestela nabigatzaileko frontend-etik ezin dira eskaerak egin localhost desberdinetatik
// -------------------------------
import express from "express";
import { MongoClient } from "mongodb";
import cors from "cors";
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// -------------------------------
// Express aplikazioa sortu
// -------------------------------

const app = express();


// -------------------------------
// Middleware
// -------------------------------
// CORS middleware-a: frontend eta backend desberdinetatik datuak eskura daitezela
app.use(cors());


// Express JSON middleware-a: POST edo PUT bidez bidalitako JSON datuak parseatzeko
app.use(express.json());


// -------------------------------
// Konfigurazioak
// -------------------------------
const PORT = 5000; // Server-a zein portutan martxan jarriko den
const MONGO_URI = "mongodb://127.0.0.1:27017"; // Lokaleko MongoDB URI


// MongoClient sortu, datubasearekin konektatzeko
const client = new MongoClient(MONGO_URI);
let db;


// -------------------------------
// Datubasearekin konektatzeko funtzioa
// -------------------------------
async function connectDB() {
  try {
    await client.connect(); // MongoDB-rekin konektatu
    db = client.db("liburutegia"); // 'liburutegia' izeneko datubasea hautatu
    console.log("MongoDB konektatuta"); // Konexio arrakastatsua
  } catch (err) {
    console.error(err); // Erroreak kontsolan erakutsi
  }
}


// Funtzioa exekutatu konektatzeko
connectDB();

// -------------------------------
// HTML serbitzeko endpoint-a
// -------------------------------
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html')); 
});

// -------------------------------

// -------------------------------
// ENDPOINT: liburu guztiak lortzeko
// -------------------------------
app.get("/liburuak", async (req, res) => {
  try {
    // Bildumako dokumentu guztiak lortu
    const liburuak = await db.collection("liburuak").find({}).toArray();
    // JSON moduan bidali nabigatzaileari
    res.json(liburuak);
  } catch (err) {
    // Arazo bat gertatzen bada, 500 errorea bidali
    res.status(500).json({ error: err.message });
  }
});


// -------------------------------
// Server-a martxan jarri
// -------------------------------
app.listen(PORT, () => console.log(`Server-a ${PORT}-ean martxan`));