require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const mongoURI = process.env.ATLAS_URI;

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

db.once('open', () => {
  console.log('Connected to MongoDB');
});

const entrySchema = new mongoose.Schema({
  name: String,
  course: String,
  topic: String,
  submissionDate: String,
  gradeStatus: String,
  taskType: String,
});

const Entry = mongoose.model('Entry', entrySchema);

const itemSchema = new mongoose.Schema({
  number: Number,
  type: String,
  path: String,
});

const Item = mongoose.model('Item', itemSchema);

const sessionSchema = new mongoose.Schema({
  title: String,
  date: String,
});

const AdditionalSession = mongoose.model('AdditionalSession', sessionSchema);


const sessionS = new mongoose.Schema({
  customId: Number, 
  title: String,
  contents: String,
  preread: String,

});

const Session = mongoose.model('Session', sessionS);



app.get('/api/getEntries', async (req, res) => {
  try {
    const entries = await Entry.find({}, 'name course topic submissionDate gradeStatus taskType');
    res.json(entries);
  } catch (error) {
    console.error('Error fetching entries:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/items', async (req, res) => {
  try {
    const items = await Item.find({}, 'number type path');
    res.json(items);
  } catch (error) {
    console.error('Error fetching items:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/additionalsessions', async (req, res) => {
  try {
    const additionalSessions = await AdditionalSession.find({}, 'title date');
    res.json(additionalSessions);
    
  } catch (error) {
    console.error('Error fetching additional sessions:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.get('/api/getSession/:customId', async (req, res) => {
  const { customId } = req.params;

  try {
    const sessions = await Session.find({ customId });

    if (!sessions || sessions.length === 0) {
      return res.status(404).json({ error: 'No sessions found' });
    }

    res.json(sessions);
  } catch (error) {
    console.error('Error fetching sessions by custom ID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});






