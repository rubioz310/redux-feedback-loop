const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

router.put('/flag/:id', (req, res) => {
    const id = req.params.id;
    let flagged = req.body.flag;
    let sqlText = `UPDATE "feedback" 
                SET "flagged" = $1
                WHERE "id" = $2`;
    
    pool.query(sqlText, [flagged, id])
    .then(result => {
        res.sendStatus(202);
    }).catch(error => {
        console.log("Error flagging feedback", error);
    })
}); // END PUT Route

// GET Route that gets all feedbacks with the most recent one first
router.get('/', (req, res) => {
    const sqlText = 'SELECT * FROM "feedback" ORDER BY "id" DESC'

    pool.query(sqlText)
    .then(result => {
        res.send(result.rows);
    }).catch(error => {
        console.log("Error getting feedback.", error);
    })
}); // END GET Route


//POST Route for uploading feedback
router.post('/upload', (req, res) => {
    const {
        feeling,
        understanding,
        support,
        comments
    } = req.body;
    let sqlText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                VALUES ($1, $2, $3, $4)`;
    pool.query(sqlText, [feeling, understanding, support, comments])
    .then(result => {
        res.sendStatus(201);
    }).catch(error => {
        console.log("Error uploading feedback", error);
    })
}); //END POST Route

// DELETE Route that deletes feedback
router.delete('/delete/:id', (req, res) => {
    const id = req.params.id;
    let sqlText = `DELETE FROM "feedback" 
                WHERE "id" = $1`;
    
    pool.query(sqlText, [id])
    .then(result => {
        res.sendStatus(202);
    }).catch(error => {
        console.log("Error deleting feedback", error);
    })
}); // END DELETE Route

module.exports = router;