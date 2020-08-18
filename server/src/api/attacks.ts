import { Router } from 'express';

const router = Router();

/**
 * @swagger
 * path:
 *  /api/v1/attack:
 *    put:
 *      summary: Attack someone
 *      tags: [Attacks Actions]
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
router.put('/attack', async (req, res) => {
  const username = req.params;
  console.log(username);
  res.send({ username });
});

export default router;
