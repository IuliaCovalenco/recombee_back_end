const express = require('express')
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const authRoute = require('./routes/auth')
const userRoute = require('./routes/users')
const postRoute = require('./routes/posts')
const cityRoute = require('./routes/cities')
//const cors = require('cors')
const recommendedRoute = require('./routes/recommended.js')

const categoryRoute = require('./routes/categories')
const multer = require('multer')
const path = require('path')

dotenv.config()
//app.use(cors())

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

app.listen('5000', () => {
  console.log('Backend is running.')
})

app.post('/users', (req, res) => {
  console.log(req.body.user)
})

app.post('/posts', (req, res) => {
  console.log(req.body.post)
})


app.use('/api/auth', authRoute)
app.use('/api/users', userRoute)
app.use('/api/posts', postRoute)
app.use('/api/categories', categoryRoute)
app.use('/api/recommended', recommendedRoute)
app.use('/api/cities', cityRoute)
