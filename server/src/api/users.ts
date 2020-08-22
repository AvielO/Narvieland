import { Router } from 'express';

const router = Router();

/**
 * @swagger
 * path:
 *  /api/v1/user:
 *    get:
 *      summary: Return a spesific user by ID
 *      tags: [Users Actions]
 *      parameters:
 *        - in: path
 *          name: username
 *          schema:
 *            type: string
 *          required: true
 *          description: example of parameter
 *      responses:
 *        200:
 *          description: User information
 */
router.get('/user', async (req, res) => {
  console.log('asdasdasdsa');
  const username = req.params;
  console.log(username);
  res.send({ username });
});

/**
 * @swagger
 * path:
 *  /api/v1/users:
 *    get:
 *      summary: Return list of users(with a little information) that exist
 *      tags: [Users Actions]
 *      parameters:
 *        - in: path
 *          name: username
 *          schema:
 *            type: string
 *          required: true
 *          description: example of parameter
 *      responses:
 *        200:
 *          description: List of users with little informations
 */
router.get('/users', async (req, res) => {
  const username = req.params;
  console.log(username);
  res.send({ username });
});

export default router;
