const router = require('express').Router()

const recombee = require('recombee-api-client')
const rqs = recombee.requests
const User = require('../models/User')
const Post = require('../models/Post')

const axios = require('axios')

const addDetail = require('../recomendations/recomendations.js').addDetail

const getRecUsers = require('../recomendations/recomendations.js')
  .getRecommendedUsers

const getRecUsersCulture = require('../recomendations/recomendations.js')
  .getRecommendedUsersCulture

const getRecUsersDesporto = require('../recomendations/recomendations.js')
  .getRecommendedUsersDesporto

const getRecUsersPolitics = require('../recomendations/recomendations.js')
  .getRecommendedUsersPolitics

const getRecUsersSustentabilidade = require('../recomendations/recomendations.js')
  .getRecommendedUsersSustentabilidade

const getRecUsersEconomia = require('../recomendations/recomendations.js')
  .getRecommendedUsersEconomia

const getRecUsersSaude = require('../recomendations/recomendations.js')
  .getRecommendedUsersSaude

const getRecUsersTecnologia = require('../recomendations/recomendations.js')
  .getRecommendedUsersTecnologia
  
const getRecUsersPersonal = require('../recomendations/recomendations.js')
  .getRecommendedPersonal


const client = new recombee.ApiClient(
  'pressclub-prod',
  'x60jJxjlXnj1P4T90hu7hy2KGtB1wKRJziSdHBUyxawMdhnlUC9G6Sx5sSKrdypv',
)

router.post('/recommended', async function (req, res, next) {
  //passar estas variáveis para o que vem no body da request
  
  console.log('body -> ', req.body)
  const userID = req.body.user

  console.log(userID)
  //const userID = '611ae48cfa50de5d5cad507a'
  const numberRec = 8

  //recombee -----
  const recomendados = await getRecUsers(userID, numberRec, {
    'scenario': 'home_user_item',
  })
  //recombee _______ FINISH HERE

  let arrayIDs = []
  recomendados.recomms.forEach((data) => {
    arrayIDs.push(data.id)
  })
  Post.find({
    _id: {
      $in: arrayIDs,
    },
  }).then((data) => {
    res.status(200)
    res.json(data.map((d) => d.toJSON()))
  })
})

router.post('/recommended/personal', async function (req, res, next) {
  //passar estas variáveis para o que vem no body da request
  
  console.log('body -> ', req.body)
  const userID = req.body.user

  console.log(userID)
  //const userID = '611ae48cfa50de5d5cad507a'
  const numberRec = 4

  //recombee -----
  const recomendados = await getRecUsersPersonal(userID, numberRec, {
    'scenario' : 'home_user_personal',
  })
  //recombee _______ FINISH HERE

  let arrayIDs = []
  recomendados.recomms.forEach((data) => {
    arrayIDs.push(data.id)
  })
  Post.find({
    _id: {
      $in: arrayIDs,
    },
  }).then((data) => {
    res.status(200)
    res.json(data.map((d) => d.toJSON()))
  })
})

router.post('/recommended/culture', async function (req, res, next) {
  //passar estas variáveis para o que vem no body da request
  const userID = req.body.user
  const numberRec = 10

  //recombee -----
  const recomendados = await getRecUsersCulture(userID, numberRec, {
    'scenario': 'home_user_cultura',
  })
  //recombee _______ FINISH HERE

  let arrayIDs = []
  recomendados.recomms.forEach((data) => {
    arrayIDs.push(data.id)
  })
  Post.find({
    _id: {
      $in: arrayIDs,
    },
  }).then((data) => {
    res.status(200)
    res.json(data.map((d) => d.toJSON()))
  })
})

router.post('/recommended/culture/limit', async function (req, res, next) {
  //passar estas variáveis para o que vem no body da request
  const userID = req.body.user
  const numberRec = 4

  //recombee -----
  const recomendados = await getRecUsersCulture(userID, numberRec, {
    'scenario': 'home_user_cultura',
  })
  //recombee _______ FINISH HERE

  let arrayIDs = []
  recomendados.recomms.forEach((data) => {
    arrayIDs.push(data.id)
  })
  Post.find({
    _id: {
      $in: arrayIDs,
    },
  }).then((data) => {
    res.status(200)
    res.json(data.map((d) => d.toJSON()))
  })
})

router.post('/recommended/desporto', async function (req, res, next) {
  //passar estas variáveis para o que vem no body da request
  const userID = req.body.user
  const numberRec = 10

  //recombee -----
  const recomendados = await getRecUsersDesporto(userID, numberRec, {
    'scenario': 'home_user_desporto',
  })
  //recombee _______ FINISH HERE

  let arrayIDs = []
  recomendados.recomms.forEach((data) => {
    arrayIDs.push(data.id)
  })
  Post.find({
    _id: {
      $in: arrayIDs,
    },
  }).then((data) => {
    res.status(200)
    res.json(data.map((d) => d.toJSON()))
  })
})

router.post('/recommended/desporto/limit', async function (req, res, next) {
  //passar estas variáveis para o que vem no body da request
  const userID = req.body.user
  const numberRec = 4

  //recombee -----
  const recomendados = await getRecUsersDesporto(userID, numberRec, {
    'scenario': 'home_user_desporto',
  })
  //recombee _______ FINISH HERE

  let arrayIDs = []
  recomendados.recomms.forEach((data) => {
    arrayIDs.push(data.id)
  })
  Post.find({
    _id: {
      $in: arrayIDs,
    },
  }).then((data) => {
    res.status(200)
    res.json(data.map((d) => d.toJSON()))
  })
})

router.post('/recommended/politica', async function (req, res, next) {
  //passar estas variáveis para o que vem no body da request
  const userID = req.body.user
  const numberRec = 10

  //recombee -----
  const recomendados = await getRecUsersPolitics(userID, numberRec, {
    'scenario': 'home_user_politics',
  })
  //recombee _______ FINISH HERE

  let arrayIDs = []
  recomendados.recomms.forEach((data) => {
    arrayIDs.push(data.id)
  })
  Post.find({
    _id: {
      $in: arrayIDs,
    },
  }).then((data) => {
    res.status(200)
    res.json(data.map((d) => d.toJSON()))
  })
})

router.post('/recommended/politica/limit', async function (req, res, next) {
  //passar estas variáveis para o que vem no body da request
  const userID = req.body.user
  const numberRec = 4

  //recombee -----
  const recomendados = await getRecUsersPolitics(userID, numberRec, {
    'scenario': 'home_user_politics',
  })
  //recombee _______ FINISH HERE

  let arrayIDs = []
  recomendados.recomms.forEach((data) => {
    arrayIDs.push(data.id)
  })
  Post.find({
    _id: {
      $in: arrayIDs,
    },
  }).then((data) => {
    res.status(200)
    res.json(data.map((d) => d.toJSON()))
  })
})

router.post('/recommended/sustentabilidade', async function (req, res, next) {
  //passar estas variáveis para o que vem no body da request
  const userID = req.body.user
  const numberRec = 10

  //recombee -----
  const recomendados = await getRecUsersSustentabilidade(userID, numberRec, {
    'scenario': 'home_user_sustentabilidade',
  })
  //recombee _______ FINISH HERE

  let arrayIDs = []
  recomendados.recomms.forEach((data) => {
    arrayIDs.push(data.id)
  })
  Post.find({
    _id: {
      $in: arrayIDs,
    },
  }).then((data) => {
    res.status(200)
    res.json(data.map((d) => d.toJSON()))
  })
})

router.post('/recommended/sustentabilidade/limit', async function (req, res, next) {
  //passar estas variáveis para o que vem no body da request
  const userID = req.body.user
  const numberRec = 4

  //recombee -----
  const recomendados = await getRecUsersSustentabilidade(userID, numberRec, {
    'scenario': 'home_user_sustentabilidade',
  })
  //recombee _______ FINISH HERE

  let arrayIDs = []
  recomendados.recomms.forEach((data) => {
    arrayIDs.push(data.id)
  })
  Post.find({
    _id: {
      $in: arrayIDs,
    },
  }).then((data) => {
    res.status(200)
    res.json(data.map((d) => d.toJSON()))
  })
})


router.post('/recommended/economia', async function (req, res, next) {
  //passar estas variáveis para o que vem no body da request
  const userID = req.body.user
  const numberRec = 10

  //recombee -----
  const recomendados = await getRecUsersEconomia(userID, numberRec, {
    'scenario': 'home_user_economia',
  })
  //recombee _______ FINISH HERE

  let arrayIDs = []
  recomendados.recomms.forEach((data) => {
    arrayIDs.push(data.id)
  })
  Post.find({
    _id: {
      $in: arrayIDs,
    },
  }).then((data) => {
    res.status(200)
    res.json(data.map((d) => d.toJSON()))
  })
})

router.post('/recommended/economia/limit', async function (req, res, next) {
  //passar estas variáveis para o que vem no body da request
  const userID = req.body.user
  const numberRec = 4

  //recombee -----
  const recomendados = await getRecUsersEconomia(userID, numberRec, {
    'scenario': 'home_user_economia',
  })
  //recombee _______ FINISH HERE

  let arrayIDs = []
  recomendados.recomms.forEach((data) => {
    arrayIDs.push(data.id)
  })
  Post.find({
    _id: {
      $in: arrayIDs,
    },
  }).then((data) => {
    res.status(200)
    res.json(data.map((d) => d.toJSON()))
  })
})


router.post('/recommended/saude', async function (req, res, next) {
  //passar estas variáveis para o que vem no body da request
  const userID = req.body.user
  const numberRec = 10

  //recombee -----
  const recomendados = await getRecUsersSaude(userID, numberRec, {
    'scenario': 'home_user_saude',
  })
  //recombee _______ FINISH HERE

  let arrayIDs = []
  recomendados.recomms.forEach((data) => {
    arrayIDs.push(data.id)
  })
  Post.find({
    _id: {
      $in: arrayIDs,
    },
  }).then((data) => {
    res.status(200)
    res.json(data.map((d) => d.toJSON()))
  })
})

router.post('/recommended/saude/limit', async function (req, res, next) {
  //passar estas variáveis para o que vem no body da request
  const userID = req.body.user
  const numberRec = 4

  //recombee -----
  const recomendados = await getRecUsersSaude(userID, numberRec, {
    'scenario': 'home_user_saude',
  })
  //recombee _______ FINISH HERE

  let arrayIDs = []
  recomendados.recomms.forEach((data) => {
    arrayIDs.push(data.id)
  })
  Post.find({
    _id: {
      $in: arrayIDs,
    },
  }).then((data) => {
    res.status(200)
    res.json(data.map((d) => d.toJSON()))
  })
})


router.post('/recommended/tecnologia', async function (req, res, next) {
  //passar estas variáveis para o que vem no body da request
  const userID = req.body.user
  const numberRec = 10

  //recombee -----
  const recomendados = await getRecUsersTecnologia(userID, numberRec, {
    'scenario': 'home_user_tecnologia',
  })
  //recombee _______ FINISH HERE

  let arrayIDs = []
  recomendados.recomms.forEach((data) => {
    arrayIDs.push(data.id)
  })
  Post.find({
    _id: {
      $in: arrayIDs,
    },
  }).then((data) => {
    res.status(200)
    res.json(data.map((d) => d.toJSON()))
  })
})


router.post('/recommended/tecnologia/limit', async function (req, res, next) {
  //passar estas variáveis para o que vem no body da request
  const userID = req.body.user
  const numberRec = 4

  //recombee -----
  const recomendados = await getRecUsersTecnologia(userID, numberRec, {
    'scenario': 'home_user_tecnologia',
  })
  //recombee _______ FINISH HERE

  let arrayIDs = []
  recomendados.recomms.forEach((data) => {
    arrayIDs.push(data.id)
  })
  Post.find({
    _id: {
      $in: arrayIDs,
    },
  }).then((data) => {
    res.status(200)
    res.json(data.map((d) => d.toJSON()))
  })
})


router.post('/recommended/click', async function (req, res, next) {
  //passar estas variáveis para o que vem no body da request
  console.log('body -> ', req.body)
  const userID = req.body.user
  console.log(userID)
  
  const itemID = req.body.postID

  //recombee -----
  const vistos = await addDetail(userID, itemID)
  //recombee _______ FINISH HERE
  console.log(vistos)
  return vistos
})


module.exports = router

//node 5000 react 3000,
