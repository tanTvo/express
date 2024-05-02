const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const postRoutes = require('./routes/postRoutes');
const ejs = require('ejs');
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static('public'));
app.use('/api/posts', postRoutes);

app.set('view engine', 'ejs'); 
app.set('views', __dirname + '/views'); 

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).render('error'); 
});

app.get('/', (req, res) => {
    res.render('index'); 
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});