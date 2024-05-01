const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const postRoutes = require('./routes/postRoutes')
const PORT = process.env.PORT || 3000

app.use(bodyParser.json());
app.use(express.static('public'));
app.use('/api/posts', postRoutes);


app.get('/', (req, res) => {
    res.send('Hello world')
});


app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`)
})