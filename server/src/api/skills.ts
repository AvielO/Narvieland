import { Router } from 'express';

const router = Router();

/**
 * @swagger
 * path:
 *  /api/v1/skills:
 *    get:
 *      summary: Return your skills
 *      tags: [Skills Actions]
 *      parameters:
 *        - in: path
 *          name: username
 *          schema:
 *            type: string
 *          required: true
 *          description: example of parameter
 *      responses:
 *        200:
 *          description: Your skills
 */
router.get('/skills', async (req, res) => {
  const username = req.params;
  console.log(username);
  res.send({ username });
});

export default router;
