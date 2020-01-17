/***********************************************************
  server
***********************************************************/

/// tools ///
const express = require ('express')
const helmet = require ('helmet')
const morgan = require ('morgan')
//  ^^^
//  I finally got this joke...
//  `morgan` is named after Dexter Morgan from the show "Dexter".
//  In the much-despised final season, Dexter escapes and becomes a logger.
//  Yup.
//  ---
const {
  respondWithError,
} = require ('./middleware')

/***************************************
  setup server
***************************************/

const server = express ()

/// wares ///
server.use ([
  helmet (),
  morgan ('dev'),
])

/// sub-routers ///
const subs = [ 'api' ]
subs.forEach ((sub) => {
  server.use (`/${sub}`, require (`./${sub}`).router)
})

/// requests ///
server.route ('/')
  .get ((ri, ro) => {
    ro
      .status (200)
      .send (`<h1>sprint-challege : node-api</h1>`)
  })

server.route ('*')
  .all (respondWithError (501))

/**************************************/

module.exports = server
