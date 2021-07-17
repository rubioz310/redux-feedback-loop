const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const feedback = require('./routes/feedbackRouter')

/** ---------- MIDDLEWARE ---------- **/
app.use(express.json()); 
app.use(express.urlencoded({extended: true}));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
app.use('/feedback', feedback);

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});