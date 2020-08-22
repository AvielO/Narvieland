import { Router } from 'express';
import { signin } from '../app/authenticationActions';
import { sqlGameRepo } from '../compositionRoot';

const router = Router();

/**
 * @swagger
 * path:
 *  /api/v1/login:
 *    get:
 *      summary: Connecting to the game
 *      tags: [Authentications Actions]
 *      parameters:
 *        - in: query
 *          name: username
 *          schema:
 *            type: string
 *          required: true
 *          description: Client's Username
 *        - in: query
 *          name: password
 *          schema:
 *            type: string
 *          required: true
 *          description: Client's password
 *      responses:
 *        200:
 *          description: abc
 *        400:
 *          description: cde
 */
router.get('/login', async (req, res) => {
  try {
    const { username, password } = req.query;
    const isUserConnected = await signin(username as string, password as string, sqlGameRepo);

    res.send({ isUserConnected }).status(200);
  } catch {
    res.send({ message: 'You are not connected' }).status(500);
  }
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
