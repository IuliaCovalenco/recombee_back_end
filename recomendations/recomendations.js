const recombee = require('recombee-api-client')
const rqs = recombee.requests

const client = new recombee.ApiClient(
  'pressclub-prod',
  'x60jJxjlXnj1P4T90hu7hy2KGtB1wKRJziSdHBUyxawMdhnlUC9G6Sx5sSKrdypv',
)

const addDetail = (userID, itemID) => {
  return client.send(new rqs.AddDetailView(userID, itemID)).
  then((result) => {
    return result;
  })
  .catch((err) => {
    console.log(err)
  })
}

const getRecommendedUsers = (userID, numberRec) => {
  return client
    .send(new rqs.RecommendItemsToUser(userID, numberRec, {
      'scenario': 'home_user_item',
    }))
    .then((result) => {
      return result;
      // res.json(result)
      // res.status(200)
    })
    .catch(() => { result = { callBD: [] }; })
    .catch((err) => {
      console.log(err)
    })
}

const getRecommendedPersonal = (userID, numberRec) => {
  return client
    .send(new rqs.RecommendItemsToUser(userID, numberRec, {
      'scenario' : 'home_user_personal',
    }))
    .then((result) => {
      return result;
      // res.json(result)
      // res.status(200)
    })
    .catch(() => { result = { callBD: [] }; })
    .catch((err) => {
      console.log(err)
    })
}

const getRecommendedUsersCulture = (userID, numberRec) => {
  return client
    .send(new rqs.RecommendItemsToUser(userID, numberRec, {
      'scenario': 'home_user_cultura',
    }))
    .then((result) => {
      return result;
      // res.json(result)
      // res.status(200)
    })
    .catch(() => { result = { callBD: [] }; })
    .catch((err) => {
      console.log(err)
    })
}

const getRecommendedUsersDesporto = (userID, numberRec) => {
  return client
    .send(new rqs.RecommendItemsToUser(userID, numberRec, {
      'scenario': 'home_user_desporto',
    }))
    .then((result) => {
      return result;
      // res.json(result)
      // res.status(200)
    })
    .catch(() => { result = { callBD: [] }; })
    .catch((err) => {
      console.log(err)
    })
}

const getRecommendedUsersPolitics = (userID, numberRec) => {
  return client
    .send(new rqs.RecommendItemsToUser(userID, numberRec, {
      'scenario': 'home_user_politics',
    }))
    .then((result) => {
      return result;
      // res.json(result)
      // res.status(200)
    })
    .catch(() => { result = { callBD: [] }; })
    .catch((err) => {
      console.log(err)
    })
}

const getRecommendedUsersSustentabilidade = (userID, numberRec) => {
  return client
    .send(new rqs.RecommendItemsToUser(userID, numberRec, {
      'scenario': 'home_user_sustentabilidade',
    }))
    .then((result) => {
      return result;
      // res.json(result)
      // res.status(200)
    })
    .catch(() => { result = { callBD: [] }; })
    .catch((err) => {
      console.log(err)
    })
}

const getRecommendedUsersEconomia = (userID, numberRec) => {
  return client
    .send(new rqs.RecommendItemsToUser(userID, numberRec, {
      'scenario': 'home_user_economia',
    }))
    .then((result) => {
      return result;
      // res.json(result)
      // res.status(200)
    })
    .catch(() => { result = { callBD: [] }; })
    .catch((err) => {
      console.log(err)
    })
}

const getRecommendedUsersSaude = (userID, numberRec) => {
  return client
    .send(new rqs.RecommendItemsToUser(userID, numberRec, {
      'scenario': 'home_user_saude',
    }))
    .then((result) => {
      return result;
      // res.json(result)
      // res.status(200)
    })
    .catch(() => { result = { callBD: [] }; })
    .catch((err) => {
      console.log(err)
    })
}

const getRecommendedUsersTecnologia = (userID, numberRec) => {
  return client
    .send(new rqs.RecommendItemsToUser(userID, numberRec, {
      'scenario': 'home_user_tecnologia',
    }))
    .then((result) => {
      return result;
      // res.json(result)
      // res.status(200)
    })
    .catch(() => { result = { callBD: [] }; })
    .catch((err) => {
      console.log(err)
    })
}

const recommendItemToUser = (userID) => {
  let rec = []
  client
    .send(
      new rqs.RecommendItemsToUser(userID, number, {
        scenario: 'home_user_item',
      }),
    )
    .then((result) => {
      console.log(result)
      rec = result.recomms
    })
}

const addUser = (userID, value) => {
  client.send(new rqs.AddUser(userID)).then((result) => {
    console.log(result)
    client.send(new rqs.SetUserValues(userID, value)).then((resu) => {
      
      console.log(resu)
    })
  })
  
}

const addItem = (itemID, value) => {
  client.send(new rqs.AddItem(itemID)).then((res) => {
    console.log(res)
    client.send(new rqs.SetItemValues(itemID, value)).then((resu) => {
      console.log(resu)
    })
  })
}



module.exports = {
  recommendItemToUser,
  addUser,
  addItem,
  addDetail,
  getRecommendedUsers,
  getRecommendedPersonal,
  getRecommendedUsersCulture,
  getRecommendedUsersDesporto,
  getRecommendedUsersPolitics,
  getRecommendedUsersSustentabilidade,
  getRecommendedUsersEconomia,
  getRecommendedUsersSaude,
  getRecommendedUsersTecnologia
}
