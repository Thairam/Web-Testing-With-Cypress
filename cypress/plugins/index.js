/// <reference types="cypress" />

const mysql = require('mysql')
const dotenv = require('dotenv')

dotenv.config()

function queryDb(query, config) {
  const connection = mysql.createConnection(config)

  connection.connect()

  return new Promise((resolve, reject) => {
    connection.query(query, (error, results) => {
      if (error) reject(error)
      else {
        connection.end()
        return resolve(results)
      }
    })
  })
}

module.exports = (on, config) => {
  const configDb = {
    host: process.env.MYSQL_URI_TEST,
    user: process.env.MYSQL_DB_USER,
    password: process.env.MYSQL_DB_PASS,
    database: process.env.MYSQL_DB_NAME,
  }

  on('task', {
    queryDb: query => {
      return queryDb(query, configDb)
    },
  })

  return config
}