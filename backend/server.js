import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const citySchema = new mongoose.Schema({ name: { type: String, unique: true } });
const City = mongoose.model('City', citySchema);

mongoose.connect('mongodb://127.0.0.1:27017/travel')
  .then(() => {
    console.log('✅ MongoDB connected');
    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT} ✅`);

    });
  })
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err);
  });
app.post('/api/admin/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'admin' && password === 'admin') {
    return res.json({ success: true });
  }
  return res.status(401).json({ success: false, message: 'Invalid credentials' });
});


app.post('/api/cities', async (req, res) => {
  const { city } = req.body;
  if (!city || !city.trim()) {
    return res.status(400).json({ message: 'City name is required' });
  }

  try {
    const newCity = city.trim();
    await City.updateOne({ name: newCity }, { name: newCity }, { upsert: true });
    res.json({ message: 'City added successfully ✅' });
  } catch (err) {
    console.error('Error adding city:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.get('/api/cities', async (req, res) => {
  try {
    const cities = await City.find().sort({ name: 1 });
    res.json({ cities: cities.map((c) => c.name) });
  } catch (err) {
    console.error('Error fetching cities:', err);
    res.status(500).json({ message: 'Error fetching cities' });
  }
});
