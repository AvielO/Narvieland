import { Router } from 'express';

const router = Router();

/**
 * @swagger
 * path:
 *  /api/v1/login:
 *    get:
 *      summary: Connecting to the game
 *      tags: [Authentications Actions]
 *      parameters:
 *        - in: path
 *          name: username
 *          schema:
 *            type: string
 *          required: true
 *          description: example of parameter
 *      responses:
 *        200:
 *          description: abc
 *        400:
 *          description: cde
 */
router.get('/login', async (req, res) => {
  const username = req.params;
  console.log(username);
  res.send({ username });
});

/**
 * @swagger
 * path:
 *  /api/v1/signup:
 *    post:
 *      summary: Registering to the game
 *      tags: [Authentications Actions]
 *      parameters:
 *        - in: path
 *          name: username
 *          schema:
 *            type: string
 *          required: true
 *          description: example of parameter
 *      responses:
 *        200:
 *          description: abc
 *        400:
 *          description: cde
 */
router.post('/signup', async (req, res) => {
  const username = req.params;
  console.log(username);
  res.send({ username });
});

/**
 * @swagger
 * path:
 *  /api/v1/logout:
 *    get:
 *      summary: Logout from the game
 *      tags: [Authentications Actions]
 *      parameters:
 *        - in: path
 *          name: username
 *          schema:
 *            type: string
 *          required: true
 *          description: example of parameter
 *      responses:
 *        200:
 *          description: abc
 *        400:
 *          description: cde
 */
router.get('/logout', async (req, res) => {
  const username = req.params;
  console.log(username);
  res.send({ username });
});

export default router;
