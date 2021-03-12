const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
/**
 * Get all of the items on the shelf
 */
router.get('/', (req, res) => {
  res.sendStatus(200); // For testing only, can be removed
});
router.get('/', rejectUnauthenticated, (req, res) => {
  console.log('isAuthenticated', req.isAuthenticated());

  let queryText = `
        SELECT * FROM "item"
        WHERE user_id = $1
    `;
  // Get user ID
  let userId = req.user.id;
  pool
    .query(queryText, [userId])
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});
/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', (req, res) => {
  // endpoint functionality
});

/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', (req, res) => {
  const itemId = req.params.id;
  const userId = req.user.id;
  // access the "item" column to delete where user_id is req.params.id

  const sqlQuery =
    'DELETE FROM "item" USING "user" WHERE "item".id = $1 AND "user_id" = $2';
  pool
    .query(sqlQuery, [itemId, userId])
    .then((dbRes) => {
      console.log('DELETE - a response occurred', dbRes);
      res.sendStatus(200);
    })
    .catch((err) => {
      console.error('DELETE - an error occurred', err);
      res.sendStatus(500);
    });
});

/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {
  // endpoint functionality
});

/**
 * Return all users along with the total number of items
 * they have added to the shelf
 */
router.get('/count', (req, res) => {
  const userId = req.user.id;
  const sqlQuery = `SELECT "item".id, "description", "image_url" FROM "item"
  JOIN "user" ON "item".user_id = "user".id 
  WHERE "user".id = $1;`;

  pool
    .query(sqlQuery, [userId])
    .then((dbRes) => {
      console.log('GET /count successful');
      res.send(dbRes.rows);
    })
    .catch((err) => {
      console.error('GET /count an error occurred', err);
    });
});

/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {
  // endpoint functionality
  const itemId = req.params.id;

  const sqlQuery = 'SELECT * FROM "item" WHERE "id" = $1';

  pool
    .query(sqlQuery, [itemId])
    .then((dbRes) => {
      console.log('GET item by id successful');
      res.send(dbRes.rows);
    })
    .catch((err) => {
      console.error('GET request unsuccessful', err);
      res.sendStatus(500);
    });
});

module.exports = router;
