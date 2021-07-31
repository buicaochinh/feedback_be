const dotenv = require('dotenv')
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const route = require('./routes')
const db = require('./configs/db')

const app = express()
app.use(cors())
app.use(morgan('dev'))
dotenv.config()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Connext MongoDB
db.connect()

route(app)

// Catch 404 Errors and forward them to error handler
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// Error handler function
app.use((err, req, res, next) => {
  const error = app.get("env") === "development" ? err : {};
  const status = err.status || 500;

  // response to client
  return res.status(status).json({
    error: {
      message: error.message,
    },
  });
});

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Server is listening on port ${port}`))
