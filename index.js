const express = require('express')
const cors = require('cors')
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const authRoute = require('./routes/auth')
const userRoute = require('./routes/users')
const postRoute = require('./routes/posts')
const cityRoute = require('./routes/cities')
const recommendedRoute = require('./routes/recommended')
const categoryRoute = require('./routes/categories')
const multer = require('multer')
const path = require('path')


app.use(cors( {
  origin: '*',
}))
dotenv.config()


app.use(function (req, res, next) {

  console.log(req, res, next);

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', true);

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});


app.use(express.json())
app.use(express.urlencoded({ extended: true}))


app.use('/images', express.static(path.join(__dirname, '/images')))


mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
  })
  .then(console.log('Connected to MongoDB'))
  .catch((err) => console.log(err))


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images')
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name)
  },
})


const upload = multer({ storage: storage })
app.post('/api/upload', upload.single('file'), (req, res) => {
  res.status(200).json('File has been uploaded')
})

/*app.listen('5000', () => {
  console.log('Backend is running.')
})*/

app.listen(process.env.PORT || 5000 );

app.post('/users', (req, res) => {
})

app.post('/posts', (req, res) => {
})


app.use('/api/auth', authRoute)
app.use('/api/users', userRoute)
app.use('/api/posts', postRoute)
app.use('/api/categories', categoryRoute)
app.use('/api/recommended', recommendedRoute)
app.use('/api/cities', cityRoute)
