const { Router } = require('express');
const express = require('express');

const instructors = require('./instructors')

const routes = express.Router();


routes.get('/', (request, response) => {
  return response.redirect("/instructors")
});

routes.get('/instructors', (request, response) => {
  return response.render("instructors/index")
});

routes.get('/instructors/create', (request, response) => {
  return response.render('instructors/create')
})

routes.get('/instructors/:id', instructors.show)

routes.post('/instructors', instructors.post)

routes.get('/members', (request, response) => {
  return response.send("Members")
});

module.exports = routes;
