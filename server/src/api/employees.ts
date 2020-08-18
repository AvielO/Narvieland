import { Router } from 'express';

const router = Router();

/**
 * @swagger
 * path:
 *  /api/v1/employees:
 *    get:
 *      summary: Update the employees
 *      tags: [Employees Actions]
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
router.get('/employees', async (req, res) => {});

/**
 * @swagger
 * path:
 *  /api/v1/employees:
 *    put:
 *      summary: Example description
 *      tags: [Employees Actions]
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
router.put('/employees', async (req, res) => {});

export default router;
