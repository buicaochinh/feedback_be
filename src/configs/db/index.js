const mongoose = require('mongoose')

const connect = () => {
  mongoose.connect(process.env.DB_URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => {
      console.log("✅ Connected database successfully!")
    })
    .catch((error) =>
      console.error(`❌ Connect database failed!\nError: '${error}'`)
    );
}

module.exports = { connect }
