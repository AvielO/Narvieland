import { Router } from 'express';

const router = Router();

/**
 * @swagger
 * path:
 *  /api/v1/resources:
 *    get:
 *      summary: Return resources by user ID
 *      tags: [Resources Actions]
 *      parameters:
 *        - in: path
 *          name: username
 *          schema:
 *            type: string
 *          required: true
 *          description: example of parameter
 *      responses:
 *        200:
 *          description: Your resources
 */
router.get('/resources', async (req, res) => {});

export default router;
