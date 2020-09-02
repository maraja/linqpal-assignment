import userRouter from './user';
import adminRouter from './admin';

const API_VERSION = 1
const API_PREFIX = '/v'+API_VERSION

const setupRoutes = app => {
    app.use(`${API_PREFIX}/users`, userRouter);
    app.use(`${API_PREFIX}/admin`, adminRouter);
}

export default setupRoutes;