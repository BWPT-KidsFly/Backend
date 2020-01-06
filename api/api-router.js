const router = require (`express`).Router();

const authRouter = require (`../auth/auth-router.js`);
const authadminRouter = require (`../auth/auth-router-admin`);
const usersRouter = require (`../users/user-router`);
const tripsRouter = require (`../trips/trip-router`);
const adminRouter = require (`../admins/admin-router`);
const appRouter = require (`../applications/applications_router`);
const appsRouter = require (`../auth/apps-router`);


router.use (`/auth`, authRouter);

router.use (`/adminauth`, authadminRouter);

router.use (`/user`, usersRouter);

router.use (`/trips`, tripsRouter);

router.use (`/admin`, adminRouter);

router.use (`/applications`, appRouter);

router.use (`/apps`, appsRouter);



module.exports = router;