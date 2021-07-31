const userRouter = require('./userRoutes')
const ticketRouter = require('./ticketRoutes')
const departmentRouter = require('./departmentRoutes')

route = (app) => {
  app.use(function (req, res, next) {
    res.setHeader(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept, Authorization"
    );
    next();
  });
  app.use('/api/auth', userRouter)
  app.use('/api/ticket', ticketRouter)
  app.use('/api/department', departmentRouter)
  app.use('/', (req, res) => res.json({status: 'Server is OK'}))
}

module.exports = route
